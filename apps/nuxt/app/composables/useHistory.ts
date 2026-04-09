export async function addHistory(body: string): Promise<History> {
  const trimmed = body.trim()
  if (!trimmed) throw new Error("Recherche vide")

  const config = useRuntimeConfig()
  const base = config.public.apiBase as string
  const url = `${base.replace(/\/$/, '')}/history`

  try {
    return await $fetch<History>(url, {
      method: 'POST',
      body: {
        body: trimmed,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (e: unknown) {
    throw {
      error: "Erreur lors de l'ajout à l'historique",
    } as HistoryError
  }
}

export interface History {
  id: number
  body: string
  timestamp?: string
}

export interface HistoryError {
  error: string
  status?: number
}

/**
 * Récupère toutes les offres depuis l'API (GET /offers).
 * @throws {HistoryError} en cas d'erreur réseau ou API
 */

export async function getHistory(): Promise<History[]> {
  const config = useRuntimeConfig()
  const base = config.public.apiBase as string
  const url = `${base.replace(/\/$/, '')}/history`

  try {
    const data = await $fetch<History[]>(url)
    return Array.isArray(data) ? data : []
  } catch (e: unknown) {
    const err = e as { data?: { error?: string }; statusCode?: number }
    throw {
      error: err?.data?.error ?? (e instanceof Error ? e.message : "Erreur lors du chargement de l'historique"),
      status: err?.statusCode,
    } as HistoryError
  }
}

/**
 * Recherche des offres via l'API (GET /offers?q=...).
 * La recherche est server-side (json-server), sans filtrage local.
 * @throws {HistoryError} en cas d'erreur réseau ou API
 */
export async function searchHistory(query: string): Promise<History[]> {
  const trimmedQuery = query.trim()
  if (!trimmedQuery) {
    return getHistory()
  }

  const config = useRuntimeConfig()
  const base = config.public.apiBase as string
  const url = `${base.replace(/\/$/, '')}/history?q=${encodeURIComponent(trimmedQuery)}`

  try {
    const data = await $fetch<History[]>(url)
    return Array.isArray(data) ? data : []
  } catch (e: unknown) {
    const err = e as { data?: { error?: string }; statusCode?: number }
    throw {
      error: err?.data?.error ?? (e instanceof Error ? e.message : 'Erreur lors de la recherche des Historique'),
      status: err?.statusCode,
    } as HistoryError
  }
}
