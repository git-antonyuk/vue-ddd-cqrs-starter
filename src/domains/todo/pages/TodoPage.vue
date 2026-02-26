<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onBeforeUnmount, watch } from "vue";
import TodoForm from "@/domains/todo/components/TodoForm.vue";
import TodoList from "@/domains/todo/components/TodoList.vue";
import { useAddTodoMutation } from "@/domains/todo/commands/addTodo";
import { useRemoveTodoMutation } from "@/domains/todo/commands/removeTodo";
import { useToggleTodoMutation } from "@/domains/todo/commands/toggleTodo";
import { useTodoStore } from "@/domains/todo/model/todoStore";
import { useTodoListQuery } from "@/domains/todo/queries/getTodos";

const todoStore = useTodoStore();
const { filter, search, filteredItems } = storeToRefs(todoStore);

const todoListQuery = useTodoListQuery();
const addTodoMutation = useAddTodoMutation();
const toggleTodoMutation = useToggleTodoMutation();
const removeTodoMutation = useRemoveTodoMutation();

watch(
  () => todoListQuery.data.value,
  (items) => {
    todoStore.setItems(items ?? []);
  },
  { immediate: true },
);

const addTodo = async (title: string) => {
  await addTodoMutation.mutateAsync(title);
};

const toggleTodo = async (id: string) => {
  await toggleTodoMutation.mutateAsync(id);
};

const removeTodo = async (id: string) => {
  await removeTodoMutation.mutateAsync(id);
};

onBeforeUnmount(() => {
  todoStore.$reset();
});
</script>

<template>
  <main class="mx-auto max-w-3xl p-6">
    <Card>
      <template #title>Todo List</template>
      <template #subtitle>LocalStorage + Pinia + TanStack Query</template>
      <template #content>
        <div class="space-y-4">
          <TodoForm @add="addTodo" />

          <div class="flex flex-wrap items-center gap-2">
            <Button
              label="All"
              :severity="filter === 'all' ? 'primary' : 'secondary'"
              size="small"
              @click="todoStore.setFilter('all')"
            />
            <Button
              label="Active"
              :severity="filter === 'active' ? 'primary' : 'secondary'"
              size="small"
              @click="todoStore.setFilter('active')"
            />
            <Button
              label="Completed"
              :severity="filter === 'completed' ? 'primary' : 'secondary'"
              size="small"
              @click="todoStore.setFilter('completed')"
            />
            <InputText
              :model-value="search"
              class="min-w-48"
              placeholder="Search..."
              @update:model-value="(value) => todoStore.setSearch(value ?? '')"
            />
          </div>

          <ProgressBar v-if="todoListQuery.isFetching.value" mode="indeterminate" style="height: 6px" />

          <TodoList
            v-if="filteredItems.length > 0"
            :items="filteredItems"
            @toggle="toggleTodo"
            @remove="removeTodo"
          />
          <Message v-else severity="info" :closable="false">No todos found.</Message>
        </div>
      </template>
    </Card>
  </main>
</template>
