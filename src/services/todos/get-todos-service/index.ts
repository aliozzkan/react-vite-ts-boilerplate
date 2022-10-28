import { useQuery } from "@tanstack/react-query";
import useInterceptor from "hooks/use-interceptor";
import { GetTodosResponseType } from "./types";

export const useGetTodosQuery = () => {
  const api = useInterceptor();

  const service = () => api.get<GetTodosResponseType>("/todos");

  return useQuery(["todos"], () => service());
};
