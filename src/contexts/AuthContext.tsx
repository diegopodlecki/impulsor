/* eslint-disable react-refresh/only-export-components */
import type { Session, User } from "@supabase/supabase-js";
import React, { useContext, useEffect, useMemo, useState } from "react";

import { supabase } from "@/lib/supabaseClient";

type AuthErrorLike = { message: string };
type AuthSessionResult = Promise<{ data: { session: Session | null }; error: AuthErrorLike | null }>;
type AuthVoidResult = Promise<{ data: null; error: AuthErrorLike | null }>;

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string) => AuthSessionResult;
  signIn: (email: string, password: string) => AuthSessionResult;
  signOut: () => AuthVoidResult;
};

const AuthContext = (typeof document !== "undefined" 
  ? React.createContext<AuthContextValue | undefined>(undefined)
  : null) as React.Context<AuthContextValue | undefined> | null;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (!supabase) {
      setSession(null);
      setUser(null);
      setLoading(false);
      return () => {
        isMounted = false;
      };
    }

    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (!isMounted) return;
        if (error) {
          setSession(null);
          setUser(null);
          setLoading(false);
          return;
        }

        setSession(data.session);
        setUser(data.session?.user ?? null);
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setSession(null);
        setUser(null);
        setLoading(false);
      });

    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      session,
      loading,
      signUp: (email: string, password: string) =>
        supabase
          ? (supabase.auth.signUp({ email, password }) as unknown as AuthSessionResult)
          : Promise.resolve({
              data: { session: null },
              error: { message: "Supabase no está configurado en este build." },
            }),
      signIn: (email: string, password: string) =>
        supabase
          ? (supabase.auth.signInWithPassword({ email, password }) as unknown as AuthSessionResult)
          : Promise.resolve({
              data: { session: null },
              error: { message: "Supabase no está configurado en este build." },
            }),
      signOut: () =>
        supabase
          ? (supabase.auth.signOut() as unknown as AuthVoidResult)
          : Promise.resolve({
              data: null,
              error: { message: "Supabase no está configurado en este build." },
            }),
    }),
    [user, session, loading],
  );

  return AuthContext ? (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  ) : (
    <>{children}</>
  );
}

export function useAuth() {
  if (!AuthContext) {
    throw new Error("Auth no está disponible en este build (SSR/SSG).");
  }
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de <AuthProvider />.");
  }
  return context;
}
