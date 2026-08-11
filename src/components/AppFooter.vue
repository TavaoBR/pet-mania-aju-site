<script setup>
import {
  ADDRESS,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_URL,
  WHATSAPP_URL,
} from '../data/site'
</script>

<template>
  <footer class="border-t border-blue-100 bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-14">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-1">
          <a href="#top" class="inline-flex items-center gap-2.5">
            <img src="/images/logo.png" alt="" class="h-10 w-10 rounded-full" />
            <span class="text-lg font-bold text-mania-ink">PetMania</span>
          </a>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
            Centro Médico Veterinário · {{ ADDRESS.neighborhood }}, {{ ADDRESS.city }}/{{ ADDRESS.state }}
          </p>
          <p class="mt-2 text-sm font-medium text-blue-700">
            Cuidar do seu amigo é a nossa prioridade
          </p>
        </div>

        <div>
          <h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-mania-ink">Clínica</h2>
          <ul class="space-y-3 text-sm text-gray-500">
            <li><a href="#servicos" class="hover:text-blue-600">Serviços</a></li>
            <li><a href="#equipe" class="hover:text-blue-600">Equipe</a></li>
            <li><a href="#espaco" class="hover:text-blue-600">Espaço</a></li>
            <li><a href="#avaliacoes" class="hover:text-blue-600">Avaliações</a></li>
          </ul>
        </div>

        <div>
          <h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-mania-ink">Contato</h2>
          <ul class="space-y-3 text-sm text-gray-500">
            <li>
              <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600">
                WhatsApp
              </a>
            </li>
            <li>
              <a :href="PHONE_URL" class="hover:text-blue-600">{{ PHONE_DISPLAY }}</a>
            </li>
            <li>
              <a :href="ADDRESS.mapsUrl" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600">
                Como chegar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-mania-ink">Redes</h2>
          <ul class="space-y-3 text-sm text-gray-500">
            <li>
              <a :href="INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600">
                Instagram @petmaniaaju
              </a>
            </li>
            <li>
              <a :href="FACEBOOK_URL" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600">
                Facebook
              </a>
            </li>
          </ul>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener noreferrer" class="btn-orange mt-6 !py-2.5">
            Agendar consulta
          </a>
        </div>
      </div>

      <hr class="my-8 border-blue-100" />
      <div class="flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} PetMania · Centro Médico Veterinário</p>
        <p>{{ ADDRESS.street }} · {{ ADDRESS.neighborhood }}, {{ ADDRESS.city }}</p>
      </div>
    </div>
  </footer>
</template>
