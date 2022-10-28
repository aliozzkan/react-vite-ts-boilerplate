import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export function StoreProvider({ children }: PropsWithChildren) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default StoreProvider;
