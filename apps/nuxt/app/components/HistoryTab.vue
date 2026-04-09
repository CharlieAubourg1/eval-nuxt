<script setup lang="ts">
import type { History } from '~/composables/useHistory'

defineProps<{
  h: History
}>()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ h.id }}</h3>
    <p class="text-gray-600 mb-1">{{ h.body }}</p>
    <p class="text-gray-500 text-sm mb-2">{{ h.timestamp }}</p>
    <!-- <span
      class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
    >
      {{ h.type }}
    </span> -->
  </div>
</template>
