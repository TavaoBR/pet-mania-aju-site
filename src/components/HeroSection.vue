<script setup>
import { BUSINESS_HOURS, GOOGLE_RATING, WHATSAPP_URL } from '../data/site'
import { media } from '../data/media'
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-[#f4f7ff]">
    <div
      class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-mania-orange/20 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-screen-xl px-4 pb-14 pt-12 sm:px-6 lg:pb-20 lg:pt-16">
      <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <p class="eyebrow">Centro Médico Veterinário</p>

          <h1
            class="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-mania-ink sm:text-5xl lg:text-[3.35rem]"
          >
            Cuidado clínico completo para o seu
            <em class="not-italic text-blue-600">melhor amigo</em>
          </h1>

          <p class="mt-6 max-w-md text-base leading-relaxed text-gray-600">
            Consultas, vacinas, cirurgias, exames e internamento no mesmo endereço.
            Agende pelo WhatsApp — a recepção confirma horário e especialidade.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              :href="WHATSAPP_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-orange gap-2 px-6 py-3.5 text-base"
            >
              Agendar no WhatsApp
            </a>
            <a href="#servicos" class="btn-outline px-6 py-3.5 text-base">
              Ver o que atendemos
            </a>
          </div>

          <p class="mt-5 text-xs tracking-wide text-gray-500">
            {{ BUSINESS_HOURS }} · {{ GOOGLE_RATING.score }} no Google
          </p>
        </div>

        <div class="relative lg:col-span-7">
          <div
            class="absolute -right-2 top-8 hidden h-[78%] w-[92%] rounded-[2rem] bg-blue-600 lg:block"
            aria-hidden="true"
          />
          <div
            class="absolute -right-6 top-16 hidden h-16 w-16 rounded-2xl bg-mania-orange lg:block"
            aria-hidden="true"
          />

          <div
            class="relative overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(15,27,61,0.16)]"
          >
            <video
              class="aspect-[16/11] w-full object-cover lg:aspect-[16/10]"
              :poster="media.hero"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              aria-label="Vídeo da PetMania Centro Médico Veterinário"
            >
              <source :src="media.heroVideo" type="video/mp4" />
            </video>
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"
            />
          </div>

          <div
            class="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur-sm sm:bottom-6 sm:left-6"
          >
            <img
              :src="media.heroPet"
              alt=""
              class="h-11 w-11 rounded-full object-cover object-top ring-2 ring-orange-100"
            />
            <div>
              <p class="text-sm font-bold text-mania-ink">{{ GOOGLE_RATING.score }} no Google</p>
              <p class="text-xs text-gray-500">{{ GOOGLE_RATING.count }} tutores avaliaram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
