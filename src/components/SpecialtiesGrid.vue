<script setup>
import { exams, labExams, specialties, surgeries, WHATSAPP_URL } from '../data/site'

const cards = [
  {
    id: 'imagem',
    title: 'Exames de imagem',
    text: 'Diagnóstico visual no mesmo centro — sem mandar o tutor para outro endereço.',
    accent: 'orange',
    items: exams,
  },
  {
    id: 'lab',
    title: 'Laboratório',
    text: 'Painéis clínicos para acompanhar o quadro com agilidade.',
    accent: 'blue',
    items: labExams,
  },
  {
    id: 'cirurgias',
    title: 'Cirurgias',
    text: 'Centro cirúrgico com anestesiologia e suporte de internamento.',
    accent: 'orange',
    items: surgeries,
    note: 'Inclui terapia dialítica quando indicada.',
  },
]
</script>

<template>
  <section id="especialidades" class="bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="eyebrow">Clínica</p>
        <h2 class="display-h2 mt-3">
          Especialidades, exames e cirurgias
        </h2>
        <p class="mt-4 text-[15px] leading-relaxed text-gray-500">
          Encaminhamento interno para as principais áreas — diagnóstico e procedimento no mesmo centro.
        </p>
      </div>

      <div class="mt-10 flex flex-wrap justify-center gap-2">
        <span
          v-for="item in specialties"
          :key="item"
          class="rounded-full bg-[#f4f7ff] px-3.5 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-blue-100"
        >
          {{ item }}
        </span>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <article
          v-for="card in cards"
          :key="card.id"
          class="flex flex-col rounded-[1.5rem] bg-[#f4f7ff] p-6 ring-1 ring-blue-100/80 sm:p-7"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.12em]"
            :class="card.accent === 'blue' ? 'text-blue-600' : 'text-mania-orange'"
          >
            {{ card.title }}
          </p>
          <p class="mt-2 text-sm leading-relaxed text-gray-500">{{ card.text }}</p>

          <ul class="mt-5 space-y-2.5">
            <li
              v-for="item in card.items"
              :key="item"
              class="flex items-start gap-2.5 text-sm text-gray-800"
            >
              <span
                class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                :class="card.accent === 'blue' ? 'bg-blue-600' : 'bg-mania-orange'"
              />
              {{ item }}
            </li>
          </ul>

          <p v-if="card.note" class="mt-4 text-sm text-gray-500">{{ card.note }}</p>

          <a
            :href="WHATSAPP_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-auto inline-flex pt-6 text-sm font-semibold text-blue-700 hover:underline"
          >
            Agendar no WhatsApp →
          </a>
        </article>
      </div>

      <div class="mt-10 text-center">
        <a href="#equipe" class="btn-outline px-6 py-3">Ver especialistas</a>
      </div>
    </div>
  </section>
</template>
