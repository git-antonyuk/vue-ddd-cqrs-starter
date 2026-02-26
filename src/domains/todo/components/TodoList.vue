<script setup lang="ts">
import TodoItem from "@/domains/todo/components/TodoItem.vue";
import type { TodoItem as Todo } from "@/domains/todo/model/types";

defineProps<{
  items: Todo[];
}>();

const emit = defineEmits<{
  toggle: [id: string];
  remove: [id: string];
}>();
</script>

<template>
  <div class="space-y-2">
    <TodoItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @toggle="emit('toggle', $event)"
      @remove="emit('remove', $event)"
    />
  </div>
</template>
