<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-8 items-start mb-16">
    <div class="flex-shrink-0">
      <div class="w-24 h-24 sm:w-32 sm:h-32 border-2 border-retro-red overflow-hidden">
        <img :src="profile.avatar" :alt="profile.name" class="w-full h-full object-cover grayscale" />
      </div>
    </div>
    <div>
      <h1 class="font-mono text-3xl sm:text-4xl font-bold text-retro-text mb-1">{{ profile.name }}</h1>
      <p class="font-mono text-retro-red text-sm mb-3">{{ profile.title }} — {{ profile.location }}</p>
      <p class="font-sans text-retro-muted leading-relaxed max-w-lg mb-6">{{ profile.bio }}</p>
      <div class="flex flex-wrap gap-4">
        <a v-if="profile.social.linkedin" :href="profile.social.linkedin" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">LinkedIn ↗</a>
        <a v-if="profile.social.github" :href="profile.social.github" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">GitHub ↗</a>
        <a :href="`mailto:${profile.email}`" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">Email ↗</a>
      </div>
    </div>
  </div>
</template>
