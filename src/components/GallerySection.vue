<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { INSTAGRAM_URL } from '../data/site'
import { galleryItems } from '../data/media'

const root = ref(null)
const modalVideo = ref(null)
const isOpen = ref(false)
const activeIndex = ref(0)
let observer

const activeItem = computed(() => galleryItems[activeIndex.value])
const featured = computed(() => galleryItems[0])
const sideItems = computed(() => galleryItems.slice(1, 3))
const bottomItems = computed(() => galleryItems.slice(3))

function openAt(index) {
  activeIndex.value = index
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

function close() {
  isOpen.value = false
  document.body.style.overflow = ''
  if (modalVideo.value) modalVideo.value.pause()
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % galleryItems.length
}

function prev() {
  activeIndex.value = (activeIndex.value - 1 + galleryItems.length) % galleryItems.length
}

function onKeydown(event) {
  if (!isOpen.value) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowRight') next()
  if (event.key === 'ArrowLeft') prev()
}

watch(isOpen, async (open) => {
  if (!open) return
  await nextTick()
  if (activeItem.value?.type === 'video' && modalVideo.value) {
    modalVideo.value.play().catch(() => {})
  }
})

watch(activeIndex, async () => {
  if (!isOpen.value) return
  await nextTick()
  if (activeItem.value?.type === 'video' && modalVideo.value) {
    modalVideo.value.currentTime = 0
    modalVideo.value.play().catch(() => {})
  }
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  const videos = root.value?.querySelectorAll('[data-preview-video]') || []
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      })
    },
    { threshold: 0.35 },
  )
  videos.forEach((video) => observer.observe(video))
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  observer?.disconnect()
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="espaco" ref="root" class="relative overflow-hidden bg-blue-600 text-white">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_0%,rgba(254,146,0,0.28),transparent_55%),radial-gradient(ellipse_50%_45%_at_95%_80%,rgba(255,255,255,0.1),transparent_50%)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -left-4 top-12 select-none text-[6.5rem] font-black leading-none tracking-tighter text-white/[0.06] uppercase md:text-[10rem]"
      aria-hidden="true"
    >
      Feed
    </div>

    <div class="relative mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-20">
      <div class="mb-8 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="mb-3 flex items-center gap-3">
            <span class="h-px w-8 bg-mania-orange" aria-hidden="true" />
            <p class="text-xs font-semibold tracking-[0.2em] text-orange-200 uppercase">
              Espaço · Instagram
            </p>
          </div>
          <h2 class="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Siga a PetMania
          </h2>
          <p class="mt-3 max-w-md text-sm leading-relaxed text-blue-100">
            Casa nova, bastidores e o dia a dia do centro — toque pra ver sem sair da página.
          </p>
        </div>

        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex w-full items-center justify-center gap-2 self-start rounded-full border border-white/25 bg-white/10 px-6 py-3 text-xs font-bold tracking-[0.14em] text-white uppercase transition hover:border-white/50 hover:bg-white/15 sm:w-auto"
        >
          @petmaniaaju
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="flex flex-col gap-3 md:gap-4">
        <div class="grid gap-3 md:gap-4 lg:grid-cols-12 lg:items-stretch">
          <button
            type="button"
            class="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-blue-800 text-left outline-none transition hover:ring-2 hover:ring-mania-orange/50 focus-visible:ring-2 focus-visible:ring-mania-orange sm:aspect-[16/11] lg:col-span-7 lg:aspect-auto lg:min-h-[480px] lg:rounded-[1.25rem]"
            :aria-label="`Abrir ${featured.alt}`"
            @click="openAt(0)"
          >
            <video
              v-if="featured.type === 'video'"
              :src="featured.src"
              :poster="featured.poster"
              data-preview-video
              class="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              muted
              loop
              playsinline
              preload="metadata"
            />
            <img
              v-else
              :src="featured.src"
              :alt="featured.alt"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/15 to-transparent" />
            <div class="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
              <span
                v-if="featured.type === 'video'"
                class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[11px] text-blue-700 shadow"
                aria-hidden="true"
              >▶</span>
              <span
                class="rounded-full bg-blue-950/55 px-2.5 py-1 text-[9px] font-bold tracking-[0.16em] text-white uppercase backdrop-blur-sm"
              >
                {{ featured.type === 'video' ? 'Vídeo' : 'Foto' }}
              </span>
            </div>
            <div class="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
              <p class="text-lg font-extrabold tracking-tight uppercase md:text-xl">
                {{ featured.label }}
              </p>
              <p class="mt-1 text-sm text-blue-100/80">{{ featured.alt }}</p>
            </div>
          </button>

          <div class="flex flex-col gap-3 max-lg:flex-row md:gap-4 lg:col-span-5">
            <button
              v-for="(item, i) in sideItems"
              :key="item.id"
              type="button"
              class="group relative aspect-square flex-1 overflow-hidden rounded-2xl bg-blue-800 text-left outline-none transition hover:ring-2 hover:ring-mania-orange/50 focus-visible:ring-2 focus-visible:ring-mania-orange lg:aspect-auto lg:min-h-[230px] lg:rounded-[1.25rem]"
              :aria-label="`Abrir ${item.alt}`"
              @click="openAt(i + 1)"
            >
              <img
                :src="item.src"
                :alt="item.alt"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
              <div class="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 md:p-4">
                <p class="text-sm font-extrabold tracking-tight uppercase">{{ item.label }}</p>
              </div>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          <button
            v-for="(item, i) in bottomItems"
            :key="item.id"
            type="button"
            class="group relative aspect-[3/4] overflow-hidden rounded-xl bg-blue-800 text-left outline-none transition hover:ring-2 hover:ring-mania-orange/50 focus-visible:ring-2 focus-visible:ring-mania-orange sm:aspect-square sm:rounded-2xl lg:aspect-[4/3] lg:rounded-[1.25rem]"
            :aria-label="`Abrir ${item.alt}`"
            @click="openAt(i + 3)"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              loading="lazy"
            />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
            <div class="pointer-events-none absolute inset-x-0 bottom-0 p-2.5 md:p-4">
              <p class="text-[11px] font-extrabold tracking-tight uppercase sm:text-sm">
                {{ item.label }}
              </p>
            </div>
          </button>
        </div>
      </div>

      <div
        class="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center"
      >
        <p class="text-sm text-blue-100/80">
          Novidades e bastidores no
          <span class="font-semibold text-white">@petmaniaaju</span>
        </p>
        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-mania-orange px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(254,146,0,0.35)] transition hover:bg-orange-600"
        >
          Abrir Instagram
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-[80] flex items-center justify-center bg-blue-950/90 p-3 backdrop-blur-md md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria PetMania"
          @click.self="close"
        >
          <button
            type="button"
            class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-blue-800 shadow md:right-6 md:top-6"
            aria-label="Fechar"
            @click="close"
          >
            ✕
          </button>

          <button
            type="button"
            class="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-800 shadow md:left-6"
            aria-label="Anterior"
            @click="prev"
          >
            ←
          </button>

          <button
            type="button"
            class="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-800 shadow md:right-6"
            aria-label="Próximo"
            @click="next"
          >
            →
          </button>

          <div class="relative flex max-h-[88vh] w-full max-w-3xl flex-col items-center">
            <div class="relative w-full overflow-hidden rounded-2xl bg-blue-900 shadow-2xl">
              <video
                v-if="activeItem.type === 'video'"
                :key="activeItem.id"
                ref="modalVideo"
                :src="activeItem.src"
                class="mx-auto max-h-[78vh] w-full object-contain"
                controls
                playsinline
                autoplay
                loop
              />
              <img
                v-else
                :key="activeItem.id"
                :src="activeItem.src"
                :alt="activeItem.alt"
                class="mx-auto max-h-[78vh] w-full object-contain"
              />
            </div>

            <div class="mt-4 flex w-full items-center justify-between gap-4 px-1">
              <div>
                <p class="text-sm font-extrabold tracking-tight text-white uppercase">
                  {{ activeItem.label }}
                </p>
                <p class="mt-0.5 text-xs text-blue-100/75 md:text-sm">{{ activeItem.alt }}</p>
              </div>
              <p class="shrink-0 text-xs font-extrabold tracking-[0.16em] text-white/80 uppercase">
                {{ activeIndex + 1 }} / {{ galleryItems.length }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
