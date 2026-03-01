<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <footer class="border-t border-retro-border mt-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="font-mono text-xs text-retro-muted">
        © {{ new Date().getFullYear() }} {{ profile.name }} — built with Vue 3
      </p>
      <div class="flex items-center gap-5">
        <a v-if="profile.social.github" :href="profile.social.github" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">GitHub ↗</a>
        <a v-if="profile.social.linkedin" :href="profile.social.linkedin" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">LinkedIn ↗</a>
        <a v-if="profile.email" :href="`mailto:${profile.email}`" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">Email ↗</a>
      </div>
    </div>
  </footer>
</template>
