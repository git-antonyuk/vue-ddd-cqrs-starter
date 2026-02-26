import type { TodoItem } from '@/domains/todo/model/types'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { todoQueryKey } from '@/domains/todo/queries/getTodos'
import { loadTodoItems, saveTodoItems } from '@/domains/todo/utils/todoStorage'

function createTodoItem(title: string): TodoItem {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    completed: false,
    createdAt: Date.now(),
  }
}

export function useAddTodoMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (title: string) => {
      const nextItem = createTodoItem(title)
      const currentItems = loadTodoItems()
      const nextItems = [nextItem, ...currentItems]
      saveTodoItems(nextItems)
      return nextItems
    },
    onSuccess: (nextItems) => {
      queryClient.setQueryData(todoQueryKey, nextItems)
    },
  })
}
