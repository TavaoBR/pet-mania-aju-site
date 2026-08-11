<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { team, WHATSAPP_URL } from '../data/site'

const track = ref(null)
const active = ref(0)
const canPrev = ref(false)
const canNext = ref(true)

function updateNav() {
  const el = track.value
  if (!el) return
  const max = el.scrollWidth - el.clientWidth
  canPrev.value = el.scrollLeft > 8
  canNext.value = el.scrollLeft < max - 8

  const cards = [...el.children]
  if (!cards.length) return
  const mid = el.scrollLeft + el.clientWidth / 2
  let best = 0
  let bestDist = Infinity
  cards.forEach((card, i) => {
    const center = card.offsetLeft - el.offsetLeft + card.clientWidth / 2
    const dist = Math.abs(center - mid)
    if (dist < bestDist) {
      bestDist = dist
      best = i
    }
  })
  active.value = best
}

function scrollByDir(dir) {
  const el = track.value
  if (!el) return
  const card = el.children[0]
  const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8
  el.scrollBy({ left: dir * step, behavior: 'smooth' })
}

function onScroll() {
  updateNav()
}

onMounted(() => {
  nextTick(() => {
    updateNav()
    track.value?.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateNav)
  })
})

onBeforeUnmount(() => {
  track.value?.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateNav)
})
</script>

<template>
  <section id="equipe" class="bg-mania-cream py-16 sm:py-24">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-2xl">
          <p class="eyebrow">Equipe</p>
          <h2 class="display-h2 mt-3">
            Mania de ser especializado
          </h2>
          <p class="mt-3 text-[15px] leading-relaxed text-gray-600">
            {{ team.length }} veterinários com formação em centros de referência.
          </p>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 transition hover:border-blue-600 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-35"
            :disabled="!canPrev"
            aria-label="Anterior"
            @click="scrollByDir(-1)"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 transition hover:border-blue-600 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-35"
            :disabled="!canNext"
            aria-label="Próximo"
            @click="scrollByDir(1)"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <a
            :href="WHATSAPP_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-orange ml-1 px-5 py-2.5"
          >
            Agendar consulta
          </a>
        </div>
      </div>

      <!-- Carrossel estilo Flowbite team cards: 1 / 2 / 3 / 4 por viewport -->
      <div
        ref="track"
        class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <article
          v-for="member in team"
          :key="member.id"
          class="w-[72%] shrink-0 snap-start sm:w-[46%] md:w-[31%] lg:w-[23.5%]"
        >
          <div
            class="overflow-hidden rounded-2xl bg-[#f4f7ff] ring-1 ring-blue-100/80 transition hover:shadow-[0_14px_36px_rgba(15,27,61,0.1)]"
          >
            <div class="aspect-[3/4] overflow-hidden bg-blue-50">
              <img
                :src="member.photo"
                :alt="member.name"
                class="h-full w-full object-cover object-[center_15%]"
                loading="lazy"
                width="720"
                height="960"
              />
            </div>
            <div class="px-4 py-4 text-center">
              <h3 class="text-base font-bold text-gray-900">{{ member.name }}</h3>
              <p class="mt-1 text-sm leading-snug text-blue-700">{{ member.role }}</p>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-5 flex items-center justify-center gap-3 text-sm text-gray-500">
        <span>{{ Math.min(active + 1, team.length) }} / {{ team.length }}</span>
      </div>
    </div>
  </section>
</template>
