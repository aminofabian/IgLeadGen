import { UserRole } from "@prisma/client";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      firstName?: string | null;
      lastName?: string | null;
      emailVerified?: Date | null;
    } & DefaultSession["user"]
  }

  interface User {
    role: UserRole;
    firstName?: string | null;
    lastName?: string | null;
    emailVerified?: Date | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
    firstName?: string | null;
    lastName?: string | null;
    emailVerified?: Date | null;
  }
}
