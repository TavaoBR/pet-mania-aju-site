<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from '../data/site'

const open = ref(false)
const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Espaço', href: '#espaco' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]

function close() {
  open.value = false
}

function onKey(e) {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
    <nav
      class="relative mx-auto flex h-[4.25rem] max-w-screen-xl items-center justify-between gap-4 px-4 sm:px-6"
    >
      <a href="#top" class="z-10 flex shrink-0 items-center gap-2.5" @click="close">
        <img src="/images/logo.png" alt="" class="h-9 w-9 rounded-full sm:h-10 sm:w-10" />
        <span class="text-lg font-bold tracking-tight text-mania-ink">PetMania</span>
      </a>

      <ul class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 md:flex lg:gap-7">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="whitespace-nowrap text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="z-10 flex shrink-0 items-center gap-2 sm:gap-3">
        <a
          :href="PHONE_URL"
          class="hidden items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:text-blue-800 xl:inline-flex"
        >
          {{ PHONE_DISPLAY }}
        </a>
        <a
          :href="WHATSAPP_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-orange !py-2"
        >
          Agendar
        </a>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-blue-50 md:hidden"
          :aria-expanded="open"
          aria-label="Menu"
          @click="open = !open"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="open" class="border-t border-blue-100 bg-white px-4 py-3 md:hidden">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50"
        @click="close"
      >
        {{ link.label }}
      </a>
      <a
        :href="WHATSAPP_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-orange mt-2 w-full"
        @click="close"
      >
        Agendar no WhatsApp
      </a>
    </div>
  </header>
</template>
