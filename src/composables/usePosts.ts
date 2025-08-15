import type { MdMod } from '@/types/md-module'

const modules = import.meta.glob<MdMod>('@/posts/**/*.md', { eager: true })

export function logModules() {
  console.log(modules)
  for (const m in modules) {
    console.log(modules[m].tags)
  }
}
