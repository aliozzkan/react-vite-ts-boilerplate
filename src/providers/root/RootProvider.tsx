import React, { PropsWithChildren } from "react";
import { QueryProvider } from "../query";
import { StoreProvider } from "../store";
import { DesignProvider } from "../desing";
import { RouterDomProvider } from "../router-dom";

function RootProvider({ children }: PropsWithChildren) {
  return (
    <StoreProvider>
      <QueryProvider>
        <DesignProvider>
          <RouterDomProvider>{children}</RouterDomProvider>
        </DesignProvider>
      </QueryProvider>
    </StoreProvider>
  );
}

export default RootProvider;
