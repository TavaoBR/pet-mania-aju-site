<script setup>
import { ADDRESS, aboutStory, INSTAGRAM_URL, WHATSAPP_URL } from '../data/site'
import { media } from '../data/media'
</script>

<template>
  <section id="sobre" class="bg-[#f4f7ff] py-20 sm:py-28">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="grid items-end gap-6 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <p class="eyebrow">{{ aboutStory.eyebrow }}</p>
          <h2 class="display-h2 mt-3">{{ aboutStory.title }}</h2>
          <p class="mt-4 max-w-xl font-display text-2xl font-medium italic leading-snug text-blue-700">
            {{ aboutStory.lead }}
          </p>
        </div>
        <p class="text-sm leading-relaxed text-gray-600 lg:col-span-5 lg:pb-2">
          Medicina e saúde em Aracaju. Consultas, vacinas, cirurgias, exames, internamento e farmácia
          — {{ ADDRESS.street }}, {{ ADDRESS.neighborhood }}.
        </p>
      </div>

      <div class="mt-12 grid gap-3 sm:grid-cols-3">
        <figure class="overflow-hidden rounded-[1.5rem] sm:col-span-2 sm:row-span-2">
          <img
            :src="media.teamGroup"
            alt="Equipe PetMania"
            class="h-full min-h-[280px] w-full object-cover"
          />
        </figure>
        <figure class="overflow-hidden rounded-[1.5rem]">
          <img :src="media.facade" alt="Fachada PetMania" class="aspect-[4/3] w-full object-cover" />
        </figure>
        <div class="flex flex-col justify-between rounded-[1.5rem] bg-mania-orange p-6 text-white">
          <p class="text-sm font-medium text-white/85">{{ aboutStory.category }}</p>
          <a
            :href="WHATSAPP_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 text-sm font-semibold underline-offset-4 hover:underline"
          >
            Agendar consulta →
          </a>
        </div>
      </div>

      <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
        <span v-for="point in aboutStory.points" :key="point">{{ point }}</span>
      </div>

      <a
        :href="INSTAGRAM_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 inline-flex text-sm font-semibold text-blue-700 hover:underline"
      >
        @petmaniaaju
      </a>
    </div>
  </section>
</template>
