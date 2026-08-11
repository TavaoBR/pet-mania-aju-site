<script setup>
import { ADDRESS, BUSINESS_HOURS, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from '../data/site'
</script>

<template>
  <section id="contato" class="relative">
    <iframe
      title="Mapa PetMania — Aracaju"
      class="h-[520px] w-full grayscale-[20%] lg:h-[640px]"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      :src="ADDRESS.embedUrl"
    />

    <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-mania-ink/70 via-mania-ink/25 to-transparent" />

    <div class="absolute inset-0 flex items-end p-4 sm:p-8 lg:items-center lg:p-12">
      <div
        class="pointer-events-auto w-full max-w-md rounded-3xl bg-white p-7 shadow-[0_24px_60px_rgba(15,27,61,0.2)] sm:p-9"
      >
        <p class="eyebrow">Endereço</p>
        <h2 class="display-h2 mt-3">Visite a PetMania</h2>
        <p class="mt-4 text-[15px] leading-relaxed text-gray-600">
          {{ ADDRESS.street }}<br />
          {{ ADDRESS.neighborhood }}, {{ ADDRESS.city }}/{{ ADDRESS.state }} · {{ ADDRESS.cep }}
        </p>
        <p class="mt-5 text-sm font-medium text-mania-ink">{{ BUSINESS_HOURS }}</p>
        <a :href="PHONE_URL" class="mt-2 block text-sm font-semibold text-blue-700 hover:underline">
          {{ PHONE_DISPLAY }}
        </a>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a :href="ADDRESS.mapsUrl" target="_blank" rel="noopener noreferrer" class="btn-blue">Como chegar</a>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="btn-orange">WhatsApp</a>
        </div>
        <a
          :href="INSTAGRAM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-sm font-semibold text-gray-500 hover:text-blue-700"
        >
          Instagram
        </a>
      </div>
    </div>
  </section>
</template>
