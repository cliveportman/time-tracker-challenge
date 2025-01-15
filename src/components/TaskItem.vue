<script setup lang="ts">
// No need to import macros in Vue 3.3+
import type { Task } from '../types/tasks';

/** @todo Define props for task */
const props = defineProps<{
  task: Task;
}>();

/** @todo Define emits for timer toggle and task update */
const emit = defineEmits<{
  (event: 'toggle-timer', taskId: string): void;
  (event: 'update-task', task: Task): void;
}>();

/** @todo Implement time formatting function */
const formatTime = (seconds: number): string => {
  // Format seconds into HH:MM:SS
  return '00:00:00';
};
</script>

<template>
  <div class="p-4 border rounded-lg shadow-sm">
    /** @todo Implement two-way binding for task title using v-model */
    <input
      type="text"
      class="w-full mb-2 text-lg font-semibold"
      :value="task.title"
    />

    /** @todo Display formatted time spent */
    <div class="text-sm text-gray-600">
      Time spent: {{ formatTime(task.timeSpent) }}
    </div>

    /** @todo Add start/stop timer button */
    <button
      class="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      @click="$emit('toggle-timer', task.id)"
    >
      {{ task.isActive ? 'Stop' : 'Start' }} Timer
    </button>
  </div>
</template>
