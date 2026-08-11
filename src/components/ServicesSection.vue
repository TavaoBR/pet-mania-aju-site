<script setup>
import { WHATSAPP_URL } from '../data/site'
import { media } from '../data/media'

const items = [
  {
    id: 'consultas',
    title: 'Consultas e vacinas',
    cta: 'Agendar',
    index: '01',
    image: media.consult,
    href: WHATSAPP_URL,
  },
  {
    id: 'cirurgias',
    title: 'Cirurgias',
    cta: 'Agendar',
    index: '02',
    image: media.hall,
    href: WHATSAPP_URL,
  },
  {
    id: 'exames',
    title: 'Exames',
    cta: 'Agendar',
    index: '03',
    image: media.reception,
    href: WHATSAPP_URL,
  },
  {
    id: 'internamento',
    title: 'Internamento',
    cta: 'Agendar',
    index: '04',
    image: media.feline,
    href: WHATSAPP_URL,
  },
]
</script>

<template>
  <section id="servicos" class="bg-mania-cream py-16 sm:py-24">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="mb-8 flex flex-col items-center text-center sm:mb-10">
        <p class="eyebrow">Serviços</p>
        <h2 class="display-h2 mt-3">Tudo no mesmo centro</h2>
        <p class="mt-4 max-w-lg text-[15px] leading-relaxed text-gray-600">
          Da consulta de rotina ao internamento — sem mandar o tutor de um lado para o outro.
        </p>
      </div>

      <div class="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        <a
          v-for="item in items"
          :key="item.id"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative block min-h-[240px] overflow-hidden rounded-2xl sm:min-h-[300px]"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-mania-ink/85 via-mania-ink/25 to-blue-900/20" />

          <span
            class="absolute right-4 top-4 font-display text-4xl font-semibold tracking-tight text-white/20 transition-colors group-hover:text-white/35"
            aria-hidden="true"
          >
            {{ item.index }}
          </span>

          <div class="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
            <h3 class="font-display text-2xl font-semibold tracking-tight text-white">
              {{ item.title }}
            </h3>
            <p
              class="mt-2 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85 transition-transform group-hover:translate-x-1"
            >
              {{ item.cta }}
              <span aria-hidden="true">→</span>
            </p>
            <div class="mt-4 h-px w-10 bg-mania-orange transition-all duration-500 group-hover:w-16" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
