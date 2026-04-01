type StorageShim = {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
  clear: () => void
  key: (index: number) => string | null
  readonly length: number
}

function createMemoryStorage(): StorageShim {
  const store = new Map<string, string>()

  return {
    getItem(key) {
      return store.has(key) ? store.get(key)! : null
    },
    setItem(key, value) {
      store.set(String(key), String(value))
    },
    removeItem(key) {
      store.delete(String(key))
    },
    clear() {
      store.clear()
    },
    key(index) {
      return Array.from(store.keys())[index] ?? null
    },
    get length() {
      return store.size
    },
  }
}

export async function register() {
  const localStorageRef = (globalThis as typeof globalThis & {
    localStorage?: Partial<StorageShim>
  }).localStorage

  if (typeof localStorageRef !== 'undefined' && typeof localStorageRef.getItem !== 'function') {
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      writable: true,
      value: createMemoryStorage(),
    })
  }
}
