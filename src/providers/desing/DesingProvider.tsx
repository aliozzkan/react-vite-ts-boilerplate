import React, { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function DesignProvider({ children }: PropsWithChildren) {
  return <ChakraProvider resetCSS>{children}</ChakraProvider>;
}

export default DesignProvider;
