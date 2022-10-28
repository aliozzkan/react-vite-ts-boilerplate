import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { queryClient } from "./query-config";

function QueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
