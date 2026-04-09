<script setup lang="ts">
import type { Offer } from '~/composables/useOffers'
import { FunnelIcon, XMarkIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Offres de stage',
  description: 'Recherchez et parcourez les offres de stage disponibles.',
})

const offers = ref<Offer[]>([])
const isLoading = ref(true)
const isError = ref(false)
const errorMessage = ref('')

const route = useRoute()
const router = useRouter()

const searchInput = ref('')
const currentQuery = computed(() => {
  const q = route.query.q
  return typeof q === 'string' ? q : ''
})

async function loadOffers() {
  const q = currentQuery.value.trim()
  isLoading.value = true
  isError.value = false
  errorMessage.value = ''
  try {
    offers.value = q ? await searchOffers(q) : await getOffers()
  } catch (e: unknown) {
    const err = e as { error?: string }
    isError.value = true
    errorMessage.value = err?.error ?? 'Erreur lors du chargement des offres'
  } finally {
    isLoading.value = false
  }
}

function handleSearch(q: string) {
  router.push({ path: '/results', query: { q } })
}

function clearSearch() {
  router.push({ path: '/results' })
}

watch(
  () => currentQuery.value,
  (q) => {
    searchInput.value = q
    loadOffers()
  },
  { immediate: true },
)
</script>

<template>
  <div class="min-h-[calc(100vh-200px)] bg-linear-to-b from-blue-50 to-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Header Section -->
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Historique de recherche</h1>
        <p v-if="currentQuery.trim()" class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Résultats pour : <span class="font-semibold text-blue-600">"{{ currentQuery }}"</span>
        </p>
        
      </div>

      <!-- Spinner pendant le chargement -->
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Message d'erreur -->
      <div v-else-if="isError" class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p class="text-red-800 font-medium">{{ errorMessage }}</p>
        <button
          type="button"
          class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          @click="loadOffers"
        >
          Réessayer
        </button>
      </div>


      <!-- Nombre de résultats liste de recherches effectuées -->
      <div>
        <p>test</p>
      </div>
    </div>
  </div>
</template>
