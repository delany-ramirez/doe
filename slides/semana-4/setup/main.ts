import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('slidev-show-editor', 'false')
    localStorage.setItem('slidev-drawing-enabled', 'false')
    localStorage.setItem('slidev-drawing-pinned', 'false')
  }
})
