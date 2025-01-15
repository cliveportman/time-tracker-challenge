<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '../types/tasks';

/** @todo Create reactive references for form fields */
const title = ref('');
const description = ref('');

/** @todo Implement form submission method */
const handleSubmit = () => {
  // Create new task and emit to parent
  const newTask: Task = {
    id: crypto.randomUUID(),
    title: title.value,
    description: description.value,
    timeSpent: 0,
    isActive: false,
    createdAt: new Date()
  };
};

defineEmits<{
  (event: 'task-created', task: Task): void;
}>();
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    /** @todo Implement form fields with v-model */
    <div>
      <label class="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        required
        class="w-full mt-1 border-gray-300 rounded-md shadow-sm"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        class="w-full mt-1 border-gray-300 rounded-md shadow-sm"
        rows="3"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Add Task
    </button>
  </form>
</template>
