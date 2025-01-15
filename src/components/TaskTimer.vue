<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Task } from '../types/tasks';

/** @todo Create reactive references for timer state */
const elapsedTime = ref(0);
const timerInterval = ref<number | null>(null);

/** @todo Implement timer start/stop methods */
const startTimer = () => {
  // Start incrementing elapsed time
};

const stopTimer = () => {
  // Clear timer interval
};

/** @todo Add lifecycle hooks for timer cleanup */
onMounted(() => {
  // Start timer if there's an active task
});

onUnmounted(() => {
  // Clean up timer
});
</script>

<template>
  <div class="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg">
    /** @todo Display current active task title */
    <div class="text-lg font-semibold mb-2">
      {{ activeTask?.title || 'No active task' }}
    </div>

    /** @todo Display running timer */
    <div class="text-3xl font-mono">
      {{ formatTime(elapsedTime) }}
    </div>
  </div>
</template>
