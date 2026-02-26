<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  add: [title: string];
}>();

const title = ref("");

const submit = () => {
  const value = title.value.trim();
  if (!value) {
    return;
  }

  emit("add", value);
  title.value = "";
};
</script>

<template>
  <div class="flex gap-2">
    <InputText
      v-model="title"
      class="w-full"
      placeholder="Add a todo..."
      @keyup.enter="submit"
    />
    <Button label="Add" @click="submit" />
  </div>
</template>
