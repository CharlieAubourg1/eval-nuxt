<script setup lang="ts">
import type { History } from '~/composables/useHistory'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  h: History
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
  (e: 'relaunch', query: string): void
}>()

</script>

<template>
  <div
    class="w-full bg-white rounded-lg shadow-md px-6 py-4 hover:shadow-lg transition-all flex items-center justify-between"
  >
    <div
      class="flex flex-col cursor-pointer"
      @click="emit('relaunch', h.body)"
    >
      <p class="text-md font-semibold text-gray-700">
        "{{ h.body }}"
      </p>

      <p class="text-md font-semibold text-gray-700">
        "{{ h.timestamp }}"
      </p>
    </div>


    <button
      class="p-2 rounded-full hover:bg-red-100 transition group"
      @click.stop="emit('delete', h.id)"
    >
      <XMarkIcon
        class="h-5 w-5 text-gray-400 group-hover:text-red-600"
      />
    </button>
  </div>
</template> 