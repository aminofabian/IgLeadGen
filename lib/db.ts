import { PrismaClient } from '@prisma/client'

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['error'],
    datasourceUrl: process.env.DATABASE_URL,
  });
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient({
      log: ['query', 'error', 'warn'],
      datasourceUrl: process.env.DATABASE_URL,
    });
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
