<script setup>
import { BUSINESS_HOURS, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from '../data/site'
</script>

<template>
  <section class="relative overflow-hidden bg-mania-orange">
    <div
      class="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-24 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
      <div class="lg:col-span-8">
        <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">Agende agora</p>
        <h2 class="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          O pet precisa de atendimento?
        </h2>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-white/85">
          Chame no WhatsApp. Confirmamos horário, especialidade e o que ele precisa — no mesmo centro.
        </p>
      </div>
      <div class="mt-10 flex flex-col gap-3 lg:col-span-4 lg:mt-0 lg:items-end">
        <a
          :href="WHATSAPP_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-lg bg-mania-ink px-7 py-3.5 text-base font-semibold text-white transition hover:bg-blue-800"
        >
          Falar no WhatsApp
        </a>
        <a
          :href="PHONE_URL"
          class="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          Ligar {{ PHONE_DISPLAY }}
        </a>
        <p class="text-sm text-white/75 lg:text-right">{{ BUSINESS_HOURS }}</p>
      </div>
    </div>
  </section>
</template>
