<script setup lang="ts">
import type { TodoItem as Todo } from '@/domains/todo/model/types'

defineProps<{
  item: Todo
}>()

const emit = defineEmits<{
  toggle: [id: string]
  remove: [id: string]
}>()
</script>

<template>
  <div class="flex items-center justify-between gap-3 rounded-lg border border-surface-700 p-3">
    <div class="flex items-center gap-3">
      <Checkbox
        binary
        :model-value="item.completed"
        @update:model-value="emit('toggle', item.id)"
      />
      <span :class="{ 'line-through opacity-70': item.completed }">
        {{ item.title }}
      </span>
      <Tag v-if="item.completed" severity="success" value="Done" />
    </div>

    <Button
      icon="pi pi-trash"
      severity="danger"
      rounded
      @click="emit('remove', item.id)"
    />
  </div>
</template>
