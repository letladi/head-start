export const CACHE_STORE = 'CACHE_STORE'

export const cacheStore = (store) => ({
  type: CACHE_STORE,
  store,
})
