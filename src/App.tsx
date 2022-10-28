import { RootProvider } from "providers/root";
import Root from "router";

function App() {
  return (
    <RootProvider>
      <Root />
    </RootProvider>
  );
}

export default App;
