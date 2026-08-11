<script setup>
defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <g v-if="name === 'stethoscope'" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
      <path d="M8 6v8a8 8 0 0 0 16 0V6" />
      <circle cx="8" cy="6" r="2.2" />
      <circle cx="24" cy="6" r="2.2" />
      <path d="M16 22v3a4 4 0 1 0 4-4" />
    </g>
    <g v-else-if="name === 'surgery'" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
      <path d="M9 23 21 7" />
      <path d="M19 5l4 4" />
      <path d="M7 21l4 4" />
      <circle cx="22" cy="22" r="3.5" />
    </g>
    <g v-else-if="name === 'scan'" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
      <rect x="6" y="7" width="20" height="18" rx="3" />
      <path d="M6 14h20" />
      <circle cx="16" cy="21" r="2.5" />
    </g>
    <g v-else stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 15 16 7l10 8v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V15Z" />
      <path d="M13 29V19h6v10" />
    </g>
  </svg>
</template>
