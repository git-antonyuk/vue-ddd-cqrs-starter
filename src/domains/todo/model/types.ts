export interface TodoItem {
  id: string
  title: string
  completed: boolean
  createdAt: number
}

export type TodoFilter = 'all' | 'active' | 'completed'

export interface TodoStoreState {
  items: TodoItem[]
  filter: TodoFilter
  search: string
}
