import { atom } from "recoil";
import { AUTH_KEY } from "../constants/store-keys";

export const authAtom = atom<{
  user: any | null;
  status: "done" | "wait" | "server";
  tokenType?: 1 | 2 | 3;
  token?: string;
}>({
  key: AUTH_KEY,
  default: {
    user: null,
    status: "wait",
  },
});
