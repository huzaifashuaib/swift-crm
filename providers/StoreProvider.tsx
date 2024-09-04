"use client";

import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import React from "react";
import { store } from "@/redux/store";


const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
   
      <ReduxProvider store={store}>
        <SessionProvider>{children}</SessionProvider>
      </ReduxProvider>
  
  );
};

export default Provider;
