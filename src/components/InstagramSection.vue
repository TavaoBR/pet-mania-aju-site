<script setup>
import { INSTAGRAM_URL } from '../data/site'
import { galleryItems } from '../data/media'
</script>

<template>
  <section id="instagram" class="pb-4 pt-4">
    <div class="container-mania mb-6 flex items-baseline justify-between gap-4">
      <h2 class="display-title text-2xl sm:text-3xl">@petmaniaaju</h2>
      <a
        :href="INSTAGRAM_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-semibold text-mania-blue"
      >
        Instagram
      </a>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4">
      <a
        v-for="item in galleryItems.slice(0, 4)"
        :key="item.src"
        :href="INSTAGRAM_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative aspect-square overflow-hidden"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:saturate-50"
          loading="lazy"
        />
      </a>
    </div>
  </section>
</template>
