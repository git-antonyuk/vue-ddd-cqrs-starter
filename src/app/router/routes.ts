import type { RouteRecordRaw } from "vue-router";
import { todoRoutes } from "@/domains/todo/routes";

export const appRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/todos",
  },
  ...todoRoutes,
];
