import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Content from "./partials/Content";
import Header from "./partials/Header";

function MainLayout(props: PropsWithChildren) {
  return (
    <Box>
      <Header />
      <Content>{props.children}</Content>
    </Box>
  );
}

export default MainLayout;
