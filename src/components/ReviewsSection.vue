<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { GOOGLE_RATING, GOOGLE_REVIEW_URL, reviews, WHATSAPP_URL } from '../data/site'

const track = ref(null)
const active = ref(0)
let timer

function scrollTo(index) {
  const el = track.value
  if (!el) return
  const card = el.children[index]
  if (!card) return
  el.scrollTo({ left: card.offsetLeft - 8, behavior: 'smooth' })
  active.value = index
}

function next() {
  scrollTo((active.value + 1) % reviews.length)
}

function prev() {
  scrollTo((active.value - 1 + reviews.length) % reviews.length)
}

function onScroll() {
  const el = track.value
  if (!el) return
  const center = el.scrollLeft + el.clientWidth / 2
  let closest = 0
  let min = Infinity
  ;[...el.children].forEach((child, index) => {
    const mid = child.offsetLeft + child.offsetWidth / 2
    const dist = Math.abs(mid - center)
    if (dist < min) {
      min = dist
      closest = index
    }
  })
  active.value = closest
}

function startTimer() {
  stopTimer()
  timer = window.setInterval(next, 5000)
}

function stopTimer() {
  if (timer) window.clearInterval(timer)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <section id="avaliacoes" class="bg-orange-50 py-16 sm:py-24">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div class="max-w-xl">
          <p class="eyebrow">Avaliações</p>
          <h2 class="display-h2 mt-3">
            Quem já trouxe<br class="hidden sm:block" />
            o pet recomenda.
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-gray-600">
            Tutores reais no Google —
            <a
              :href="GOOGLE_REVIEW_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-800"
            >
              {{ GOOGLE_RATING.count }} avaliações
            </a>.
          </p>
        </div>

        <div
          class="flex shrink-0 items-center gap-3 rounded-xl border border-orange-200/80 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(15,27,61,0.06)]"
        >
          <div>
            <p class="font-display text-3xl font-semibold tracking-tight text-blue-600">
              {{ GOOGLE_RATING.score }}
            </p>
            <p class="text-xs text-mania-orange" aria-label="5 estrelas">★★★★★</p>
          </div>
          <div class="border-l border-orange-200 pl-3">
            <p class="text-sm font-semibold text-mania-ink">{{ GOOGLE_RATING.count }}</p>
            <p class="text-[11px] text-gray-500">{{ GOOGLE_RATING.label }}</p>
          </div>
        </div>
      </div>

      <div class="relative" @mouseenter="stopTimer" @mouseleave="startTimer">
        <div class="mb-3 flex items-center justify-end gap-2">
          <button
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 transition hover:border-blue-600 hover:bg-blue-50"
            aria-label="Anterior"
            @click="prev"
          >
            ←
          </button>
          <button
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 transition hover:border-blue-600 hover:bg-blue-50"
            aria-label="Próximo"
            @click="next"
          >
            →
          </button>
        </div>

        <div
          ref="track"
          class="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          @scroll.passive="onScroll"
        >
          <blockquote
            v-for="(review, index) in reviews"
            :key="review.highlight"
            class="flex w-[260px] shrink-0 snap-start flex-col rounded-xl border border-orange-200/70 bg-white p-4 shadow-[0_8px_24px_rgba(15,27,61,0.05)] sm:w-[280px]"
            :class="active === index ? 'ring-2 ring-mania-orange/35' : ''"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] tracking-widest text-mania-orange" aria-hidden="true">★★★★★</span>
              <span class="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                {{ review.source }}
              </span>
            </div>
            <p class="mt-3 font-display text-sm font-semibold leading-snug tracking-tight text-mania-ink">
              “{{ review.highlight }}”
            </p>
            <p class="mt-2 flex-1 text-xs leading-relaxed text-gray-600">
              {{ review.text }}
            </p>
          </blockquote>
        </div>

        <div class="mt-4 flex justify-center gap-1.5">
          <button
            v-for="(_, index) in reviews"
            :key="index"
            type="button"
            class="h-1.5 rounded-full transition-all"
            :class="active === index ? 'w-5 bg-blue-600' : 'w-1.5 bg-blue-600/25'"
            :aria-label="`Ir para avaliação ${index + 1}`"
            @click="scrollTo(index)"
          />
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3 sm:flex-row">
        <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="btn-orange px-6 py-3">
          Quero agendar também
        </a>
        <a :href="GOOGLE_REVIEW_URL" target="_blank" rel="noopener noreferrer" class="btn-outline px-6 py-3">
          Ver no Google
        </a>
      </div>
    </div>
  </section>
</template>
