import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { todoQueryKey } from '@/domains/todo/queries/getTodos'
import { loadTodoItems, saveTodoItems } from '@/domains/todo/utils/todoStorage'

export function useToggleTodoMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      const currentItems = loadTodoItems()
      const nextItems = currentItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      )
      saveTodoItems(nextItems)
      return nextItems
    },
    onSuccess: (nextItems) => {
      queryClient.setQueryData(todoQueryKey, nextItems)
    },
  })
}
