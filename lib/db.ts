import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const getPrismaClient = () => {
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient({
      datasourceUrl: process.env.DATABASE_URL,
      errorFormat: 'minimal',
    })
  }
  
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      datasourceUrl: process.env.DATABASE_URL,
      log: ['query', 'error', 'warn'],
    })
  }

  return globalForPrisma.prisma
}

export const db = getPrismaClient()
