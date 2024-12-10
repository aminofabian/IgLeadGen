import { UserRole } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { 
  Adapter,
  AdapterUser,
  AdapterAccount,
  AdapterSession,
  VerificationToken
} from "@auth/core/adapters";

// Extend the AdapterUser type to include our custom fields
type ExtendedAdapterUser = AdapterUser & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
};

// Define the shape of our database user
interface DbUser {
  id: string;
  email: string | null;
  emailVerified: Date | null;
  firstName: string | null;
  lastName: string | null;
  image: string | null;
  role: UserRole;
  isTwoFactorEnabled: boolean;
}

export function CustomPrismaAdapter(p: PrismaClient): Adapter {
  // Helper function to format user data
  const formatUser = (dbUser: DbUser): ExtendedAdapterUser => {
    if (!dbUser.email) {
      throw new Error('User email is required');
    }
    return {
      id: dbUser.id,
      email: dbUser.email,
      emailVerified: dbUser.emailVerified,
      name: dbUser.firstName 
        ? `${dbUser.firstName} ${dbUser.lastName || ''}`.trim() 
        : null,
      image: dbUser.image,
      role: dbUser.role,
      isTwoFactorEnabled: dbUser.isTwoFactorEnabled,
    };
  };

  return {
    createUser: async (data): Promise<ExtendedAdapterUser> => {
      const user = await p.user.create({
        data: {
          email: data.email,
          emailVerified: data.emailVerified,
          firstName: data.name?.split(' ')[0] || null,
          lastName: data.name?.split(' ').slice(1).join(' ') || null,
          image: data.image,
          role: UserRole.USER,
          isTwoFactorEnabled: false,
        },
      });
      return formatUser(user);
    },

    getUser: async (id): Promise<ExtendedAdapterUser | null> => {
      const user = await p.user.findUnique({ where: { id } });
      if (!user) return null;
      return formatUser(user);
    },

    getUserByEmail: async (email): Promise<ExtendedAdapterUser | null> => {
      const user = await p.user.findUnique({ where: { email } });
      if (!user) return null;
      return formatUser(user);
    },

    getUserByAccount: async ({ providerAccountId, provider }): Promise<ExtendedAdapterUser | null> => {
      const account = await p.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
        include: { user: true },
      });
      if (!account?.user) return null;
      return formatUser(account.user);
    },

    updateUser: async (data): Promise<ExtendedAdapterUser> => {
      const { id, ...userData } = data;
      if (!id) throw new Error('User ID is required for update');

      const user = await p.user.update({
        where: { id },
        data: userData,
      });
      return formatUser(user);
    },

    deleteUser: async (userId): Promise<ExtendedAdapterUser> => {
      const user = await p.user.delete({ where: { id: userId } });
      return formatUser(user);
    },

    linkAccount: async (data): Promise<void> => {
      await p.account.create({
        data: {
          userId: data.userId,
          type: data.type,
          provider: data.provider,
          providerAccountId: data.providerAccountId,
          refresh_token: data.refresh_token?.toString() ?? null,
          access_token: data.access_token?.toString() ?? null,
          expires_at: data.expires_at,
          token_type: data.token_type,
          scope: data.scope,
          id_token: data.id_token?.toString() ?? null,
          session_state: data.session_state?.toString() ?? null,
        },
      });
    },

    unlinkAccount: async ({ providerAccountId, provider }): Promise<void> => {
      await p.account.delete({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
      });
    },

    createSession: async ({ sessionToken, userId, expires }): Promise<AdapterSession> => {
      return p.session.create({
        data: {
          sessionToken,
          userId,
          expires,
        },
      });
    },

    getSessionAndUser: async (sessionToken): Promise<{ session: AdapterSession; user: ExtendedAdapterUser } | null> => {
      const userAndSession = await p.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });

      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;

      return {
        session,
        user: formatUser(user),
      };
    },

    updateSession: async ({ sessionToken, expires }): Promise<AdapterSession | null> => {
      return p.session.update({
        where: { sessionToken },
        data: { expires },
      });
    },

    deleteSession: async (sessionToken): Promise<void> => {
      await p.session.delete({ where: { sessionToken } });
    },

    createVerificationToken: async (data): Promise<VerificationToken> => {
      const verificationToken = await p.verificationToken.create({
        data: {
          email: data.identifier,
          token: data.token,
          expires: data.expires,
        },
      });

      return {
        identifier: verificationToken.email,
        token: verificationToken.token,
        expires: verificationToken.expires,
      };
    },

    useVerificationToken: async ({ identifier, token }): Promise<VerificationToken | null> => {
      try {
        const verificationToken = await p.verificationToken.delete({
          where: {
            email_token: {
              email: identifier,
              token,
            },
          },
        });

        return {
          identifier: verificationToken.email,
          token: verificationToken.token,
          expires: verificationToken.expires,
        };
      } catch {
        return null;
      }
    },
  };
}
