<script setup>
import { WHATSAPP_URL } from '../data/site'
</script>

<template>
  <a
    :href="WHATSAPP_URL"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(37,211,102,0.45)] transition hover:scale-[1.03] hover:bg-[#1ebe57] sm:bottom-7 sm:right-7 sm:px-5"
    aria-label="Agendar no WhatsApp"
  >
    <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        d="M20.5 3.5A11.5 11.5 0 0 0 3.2 17.9L2 22l4.2-1.1A11.5 11.5 0 1 0 20.5 3.5Zm-8.5 17.4a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.8.7.8-2.7-.2-.3a9.5 9.5 0 1 1 7.3 3.8Zm5.2-7.1c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.5-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.7.7 2.4.8 3.2.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3 0-.1-.2-.2-.5-.3Z"
      />
    </svg>
    <span class="hidden sm:inline">Agendar no WhatsApp</span>
    <span class="sm:hidden">WhatsApp</span>
  </a>
</template>
