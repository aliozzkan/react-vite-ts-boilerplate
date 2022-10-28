import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

function RouterDomProvider(props: PropsWithChildren) {
  return <BrowserRouter>{props.children}</BrowserRouter>;
}

export default RouterDomProvider;
