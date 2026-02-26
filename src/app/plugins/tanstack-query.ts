import type { App } from 'vue'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

const queryClient = new QueryClient()

export function installTanStackQuery(app: App) {
  app.use(VueQueryPlugin, {
    queryClient,
  })
}
