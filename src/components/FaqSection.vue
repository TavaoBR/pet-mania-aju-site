<script setup>
import { ref } from 'vue'
import { faqs, WHATSAPP_URL } from '../data/site'

const openIndex = ref(0)

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="faq" class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <p class="eyebrow">Dúvidas</p>
          <h2 class="display-h2 mt-3">
            Perguntas frequentes
          </h2>
          <p class="mt-4 text-[15px] leading-relaxed text-gray-500">
            O essencial sobre agendamento, horários e o que a clínica cobre. Se faltar algo, chama no WhatsApp.
          </p>
          <a
            :href="WHATSAPP_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-orange mt-8 px-6 py-3"
          >
            Falar com a recepção
          </a>
        </div>

        <div class="lg:col-span-8">
          <div class="divide-y divide-blue-100/80 rounded-2xl bg-white px-5 sm:px-8">
            <div v-for="(faq, index) in faqs" :key="faq.q" class="py-1">
              <button
                type="button"
                class="flex w-full items-start gap-4 py-5 text-left"
                :aria-expanded="openIndex === index"
                @click="toggle(index)"
              >
                <span
                  class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  :class="
                    openIndex === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-600'
                  "
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <span class="min-w-0 flex-1">
                  <span
                    class="block text-base font-semibold leading-snug"
                    :class="openIndex === index ? 'text-blue-700' : 'text-gray-900'"
                  >
                    {{ faq.q }}
                  </span>
                  <span
                    v-show="openIndex === index"
                    class="mt-2 block text-[15px] font-normal leading-relaxed text-gray-500"
                  >
                    {{ faq.a }}
                  </span>
                </span>
                <span
                  class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border"
                  :class="
                    openIndex === index
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-blue-100 text-gray-400'
                  "
                  aria-hidden="true"
                >
                  <svg class="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                    <path
                      v-if="openIndex !== index"
                      d="M6 2v8"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
