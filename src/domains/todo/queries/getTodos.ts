import { useQuery } from "@tanstack/vue-query";
import { loadTodoItems } from "@/domains/todo/utils/todoStorage";

export const todoQueryKey = ["todos"] as const;

export const useTodoListQuery = () =>
  useQuery({
    queryKey: todoQueryKey,
    queryFn: async () => loadTodoItems(),
    initialData: [],
  });
