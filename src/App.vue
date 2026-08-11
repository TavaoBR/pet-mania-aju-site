<script setup>
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import SpecialtiesGrid from './components/SpecialtiesGrid.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import CareCta from './components/CareCta.vue'
import TeamSection from './components/TeamSection.vue'
import GallerySection from './components/GallerySection.vue'
import AboutSection from './components/AboutSection.vue'
import LocationSection from './components/LocationSection.vue'
import FaqSection from './components/FaqSection.vue'
import FinalCta from './components/FinalCta.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppNavbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <SpecialtiesGrid />
      <ReviewsSection />
      <CareCta />
      <TeamSection />
      <GallerySection />
      <AboutSection />
      <LocationSection />
      <FaqSection />
      <FinalCta />
    </main>
    <AppFooter />
    <WhatsAppFloat />
  </div>
</template>
