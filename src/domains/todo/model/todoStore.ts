import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { TodoFilter, TodoItem } from "./types";

export const useTodoStore = defineStore("todo", () => {
  const items = ref<TodoItem[]>([]);
  const filter = ref<TodoFilter>("all");
  const search = ref("");

  const filteredItems = computed(() => {
    const normalizedSearch = search.value.trim().toLowerCase();

    return items.value.filter((item) => {
      const matchesFilter =
        filter.value === "all" ||
        (filter.value === "active" && !item.completed) ||
        (filter.value === "completed" && item.completed);

      const matchesSearch =
        normalizedSearch.length === 0 ||
        item.title.toLowerCase().includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  });

  const setItems = (nextItems: TodoItem[]) => {
    items.value = nextItems;
  };

  const setFilter = (nextFilter: TodoFilter) => {
    filter.value = nextFilter;
  };

  const setSearch = (value: string) => {
    search.value = value;
  };

  const $reset = () => {
    items.value = [];
    filter.value = "all";
    search.value = "";
  };

  return {
    items,
    filter,
    search,
    filteredItems,
    setItems,
    setFilter,
    setSearch,
    $reset,
  };
});
