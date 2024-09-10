"use client";

import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

type NextAuthSessionProviderProps = {
  children: React.ReactNode;
};

const NextAuthSessionProvider = ({
  children,
}: NextAuthSessionProviderProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProvider;
