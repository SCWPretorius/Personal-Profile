<script setup lang="ts">
import { profile } from '@/data/profile'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28">
    <div class="max-w-2xl">
      <p class="font-mono text-xs text-retro-muted mb-4">
        <span class="text-retro-red">//</span> {{ profile.location }}
        <span v-if="profile.availableForWork" class="ml-4 text-retro-red">● available for work</span>
      </p>

      <h1
        class="glitch font-mono text-4xl sm:text-6xl font-bold text-retro-text leading-tight mb-4"
        :data-text="profile.name"
      >
        {{ profile.name }}
      </h1>

      <h2 class="font-mono text-xl sm:text-2xl text-retro-red mb-6">
        {{ profile.title }}
      </h2>

      <p class="text-retro-muted text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-sans">
        {{ profile.tagline }}
      </p>

      <div class="flex flex-wrap items-center gap-4">
        <Button variant="primary" as="RouterLink" to="/projects">View Projects →</Button>
        <Button variant="outline" as="a" :href="`mailto:${profile.email}`">Get in Touch</Button>
      </div>

      <div class="mt-12 font-mono text-xs text-retro-muted">
        <span class="text-retro-red">&gt;</span>
        <span class="inline-block w-2 h-4 bg-retro-red align-middle ml-1 animate-blink"></span>
      </div>
    </div>
  </section>
</template>
