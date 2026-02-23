import { defineStore } from 'pinia'

export const useTagFilterStore = defineStore('tagFilter', {
  state: () => ({
    selectedTag: null as string | null,
  }),
  getters: {
    isActive: (state) => (tag: string) => state.selectedTag === tag,
  },
  actions: {
    toggle(tag: string) {
      this.selectedTag = this.selectedTag === tag ? null : tag
    },
    set(tag: string | null) {
      this.selectedTag = tag
    },
    clear() {
      this.selectedTag = null
    },
  },
})
