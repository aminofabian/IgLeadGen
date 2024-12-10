import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient, UserRole } from "@prisma/client";
import { Adapter, AdapterUser } from "next-auth/adapters";

export interface CustomAdapterUser extends AdapterUser {
  role: UserRole;
  isTwoFactorEnabled: boolean;
}

export function CustomPrismaAdapter(prisma: PrismaClient): Adapter {
  const _prismaAdapter = PrismaAdapter(prisma);
  
  if (!_prismaAdapter) {
    throw new Error("Failed to initialize PrismaAdapter");
  }

  // Assert the type to ensure methods are not seen as undefined
  const prismaAdapter = _prismaAdapter as Required<typeof _prismaAdapter>;

  return {
    ...prismaAdapter,
    createUser: async (data): Promise<CustomAdapterUser> => {
      const user = await prismaAdapter.createUser(data);
      return {
        ...user,
        role: "USER" as UserRole,
        isTwoFactorEnabled: false,
      };
    },
    getUser: async (id): Promise<CustomAdapterUser | null> => {
      const user = await prismaAdapter.getUser(id);
      if (!user) return null;
      return {
        ...user,
        role: (user as any).role || "USER" as UserRole,
        isTwoFactorEnabled: (user as any).isTwoFactorEnabled ?? false,
      };
    },
    getUserByEmail: async (email): Promise<CustomAdapterUser | null> => {
      const user = await prismaAdapter.getUserByEmail(email);
      if (!user) return null;
      return {
        ...user,
        role: (user as any).role || "USER" as UserRole,
        isTwoFactorEnabled: (user as any).isTwoFactorEnabled ?? false,
      };
    },
    getUserByAccount: async (provider_providerAccountId): Promise<CustomAdapterUser | null> => {
      const user = await prismaAdapter.getUserByAccount(provider_providerAccountId);
      if (!user) return null;
      return {
        ...user,
        role: (user as any).role || "USER" as UserRole,
        isTwoFactorEnabled: (user as any).isTwoFactorEnabled ?? false,
      };
    },
  };
}
