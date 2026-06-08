<script setup lang="ts">
// Clear editor and drawing state from localStorage on every load
if (typeof window !== 'undefined') {
  window.localStorage.setItem('slidev-show-editor', 'false')
  window.localStorage.setItem('slidev-drawing-enabled', 'false')
  window.localStorage.setItem('slidev-drawing-pinned', 'false')
}
</script>

<style>
/* Hide all SideEditor DOM nodes (fragment = resize handle + editor panel) */
#page-root > *:not(#slide-container) {
  display: none !important;
}
/* Collapse the grid so slide takes full space */
#page-root {
  grid-template-columns: 1fr !important;
  grid-template-rows: 1fr !important;
}
/* Hide the goto-slide dialog */
#slidev-goto-dialog {
  display: none !important;
}
</style>
