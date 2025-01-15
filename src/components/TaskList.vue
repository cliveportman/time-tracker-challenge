<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Task } from '../types/tasks';
import TaskItem from './TaskItem.vue';

/** @todo Create reactive reference for tasks array */
const tasks = ref<Task[]>([]);

/** @todo Implement computed property for filtered tasks */
const filteredTasks = computed(() => {
  // Return filtered tasks based on selected filter
  return tasks.value;
});

/** @todo Implement method to add new task */
const addTask = (task: Task) => {
  // Add task to tasks array
};

/** @todo Implement method to delete task */
const deleteTask = (taskId: string) => {
  // Remove task from tasks array
};

/** @todo Implement method to toggle task timer */
const toggleTimer = (taskId: string) => {
  // Start/stop timer for task
};
</script>

<template>
  <div class="space-y-4">
    /** @todo Implement task filtering options (all, active, completed) */
    <div class="flex gap-2 mb-4">
      <!-- Add filter buttons here -->
    </div>

    /** @todo Display list of tasks using v-for */
    <div class="space-y-2">
      <!-- TaskItem components should go here -->
    </div>
  </div>
</template>

