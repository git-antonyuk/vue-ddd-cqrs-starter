import type { TodoItem } from '@/domains/todo/model/types'

const TODO_STORAGE_KEY = 'fsd.todo.items'

export function loadTodoItems(): TodoItem[] {
  const rawValue = localStorage.getItem(TODO_STORAGE_KEY)
  if (!rawValue) {
    return []
  }

  try {
    const parsed: unknown = JSON.parse(rawValue)
    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter(
      (item): item is TodoItem =>
        typeof item === 'object'
        && item !== null
        && typeof (item as TodoItem).id === 'string'
        && typeof (item as TodoItem).title === 'string'
        && typeof (item as TodoItem).completed === 'boolean'
        && typeof (item as TodoItem).createdAt === 'number',
    )
  }
  catch {
    return []
  }
}

export function saveTodoItems(items: TodoItem[]) {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(items))
}
