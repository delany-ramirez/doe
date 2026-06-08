import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(() => {
  if (typeof window !== 'undefined') {
    // Keep the editor panel closed on every load
    localStorage.setItem('slidev-show-editor', 'false')
    // Keep drawing toolbar hidden
    localStorage.setItem('slidev-drawing-enabled', 'false')
    localStorage.setItem('slidev-drawing-pinned', 'false')
  }
})
