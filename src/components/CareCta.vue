<script setup>
import { ADDRESS, WHATSAPP_URL } from '../data/site'
import { media } from '../data/media'

const features = [
  {
    title: 'Internamento',
    text: 'Acompanhamento contínuo quando o quadro pede observação.',
  },
  {
    title: 'Sala exclusiva felinos',
    text: 'Ambiente pensado para gatos — menos estresse na espera.',
  },
  {
    title: 'Consultórios e exames',
    text: 'Imagem e suporte clínico no mesmo endereço da Suíssa.',
  },
]
</script>

<template>
  <section id="estrutura" class="overflow-hidden bg-white">
    <div class="mx-auto grid max-w-screen-xl lg:grid-cols-2">
      <div class="relative min-h-[420px]">
        <img
          :src="media.reception"
          alt="Recepção PetMania"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-mania-ink/50 to-transparent" />
        <div class="absolute bottom-6 left-6 right-6 max-w-sm rounded-2xl bg-white/95 p-5 backdrop-blur-sm">
          <p class="text-xs font-semibold uppercase tracking-[0.16em] text-mania-orange">Um só endereço</p>
          <p class="mt-2 font-semibold text-mania-ink">
            {{ ADDRESS.street }}
          </p>
          <p class="mt-0.5 text-sm text-gray-500">
            {{ ADDRESS.neighborhood }}, {{ ADDRESS.city }}
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-center bg-[#f4f7ff] px-6 py-16 sm:px-12 lg:px-16">
        <p class="eyebrow">Estrutura</p>
        <h2 class="display-h2 mt-3">Casa nova, cuidado de sempre</h2>
        <p class="mt-5 max-w-md text-[15px] leading-relaxed text-gray-600">
          Internamento, felinos e exames no mesmo centro — sem mandar o pet de um lado para o outro.
        </p>

        <ul class="mt-10 space-y-6">
          <li v-for="(item, i) in features" :key="item.title" class="flex gap-4">
            <span class="font-display text-lg italic text-blue-600">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <p class="font-semibold text-mania-ink">{{ item.title }}</p>
              <p class="mt-1 text-sm leading-relaxed text-gray-600">{{ item.text }}</p>
            </div>
          </li>
        </ul>

        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contato" class="btn-blue px-6 py-3">Como chegar</a>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="btn-orange px-6 py-3">
            Agendar visita
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
