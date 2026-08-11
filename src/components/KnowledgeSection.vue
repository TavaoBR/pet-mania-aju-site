<script setup>
import { knowledge, WHATSAPP_URL } from '../data/site'
</script>

<template>
  <section class="bg-white py-20">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6">
      <div class="mx-auto mb-12 max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-wide text-mania-orange">Para o tutor</p>
        <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          O que os tutores mais perguntam
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article v-for="item in knowledge" :key="item.title" class="surface-card p-7">
          <span class="inline-flex rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-600">
            {{ item.tag }}
          </span>
          <h3 class="mt-4 text-lg font-bold text-gray-900">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-500">{{ item.text }}</p>
          <a
            :href="WHATSAPP_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-block text-sm font-semibold text-blue-700 hover:underline"
          >
            Falar com a equipe
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
