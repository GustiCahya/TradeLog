import type { NextAuthConfig } from "next-auth"
import { AUTH_ROUTES, DEFAULT_LOGIN_REDIRECT, PUBLIC_ROUTES } from "./lib/routes";

export default {
  providers: [], // Tambahkan provider di sini (Google, GitHub, dll)
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const { pathname } = nextUrl;
      const isLoggedIn = !!auth?.user;

      const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
      const isAuthRoute = AUTH_ROUTES.includes(pathname);

      // 1. User already logged in is prohibited from accessing Auth pages (Login/Register)
      if (isAuthRoute) {
        if (isLoggedIn) {
          return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return true;
      }

      // 2. Allow access if route is public or user is already logged in
      if (isPublicRoute || isLoggedIn) {
        return true;
      }

      // 3. Kick user to login if trying to access private route without login
      return false; 
    },
  },
} satisfies NextAuthConfig