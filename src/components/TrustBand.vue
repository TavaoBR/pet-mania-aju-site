<script setup>
import { GOOGLE_RATING, team } from '../data/site'

const stats = [
  { value: GOOGLE_RATING.score, label: 'no Google' },
  { value: `${GOOGLE_RATING.count}+`, label: 'avaliações' },
  { value: String(team.length), label: 'especialistas' },
  { value: '1', label: 'endereço completo' },
]
</script>

<template>
  <!-- Flowbite Social Proof — faixa de confiança pós-hero -->
  <section class="border-y border-blue-100 bg-white" aria-label="Números PetMania">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10">
      <dl class="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <dt class="order-2 mt-1 text-sm font-medium text-gray-500">{{ stat.label }}</dt>
          <dd class="order-1 text-3xl font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            {{ stat.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
