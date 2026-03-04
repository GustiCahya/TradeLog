import NextAuth from "next-auth"
import authConfig from "./auth.config"

// We need to split auth config for Edge compatibility in Middleware
// because Prisma doesn't work well in Edge. So auth.ts has PrismaAdapter, 
// auth.config.ts has providers.

export const { auth: middleware } = NextAuth(authConfig)

export const config = {
  // Matches all routes except api, _next/static, _next/image, favicon.ico
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
