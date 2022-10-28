import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function Content(props: PropsWithChildren) {
  return <Box>{props.children}</Box>;
}

export default Content;
