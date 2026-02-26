import type { RouteRecordRaw } from 'vue-router'

export const todoRoutes: RouteRecordRaw[] = [
  {
    path: '/todos',
    name: 'todo-list',
    component: () => import('@/domains/todo/pages/TodoPage.vue'),
  },
]
