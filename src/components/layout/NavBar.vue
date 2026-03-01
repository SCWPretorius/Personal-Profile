<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { profile } from '@/data/profile'

const route = useRoute()
const menuOpen = ref(false)

const navLinks = [
  { name: 'about', label: 'About', path: '/about' },
  { name: 'skills', label: 'Skills', path: '/skills' },
  { name: 'projects', label: 'Projects', path: '/projects' },
  { name: 'blog', label: 'Blog', path: '/blog' },
]

function isActive(path: string) {
  return route.path === path || (path !== '/' && route.path.startsWith(path))
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-retro-bg border-b border-retro-border">
    <nav class="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
      <RouterLink
        to="/"
        class="font-mono text-sm font-bold text-retro-text hover:text-retro-red transition-colors"
        @click="menuOpen = false"
      >
        <span class="text-retro-red">&gt;</span>_{{ profile.name.split(' ')[0].toLowerCase() }}
      </RouterLink>

      <ul class="hidden md:flex items-center gap-6">
        <li v-for="link in navLinks" :key="link.name">
          <RouterLink
            :to="link.path"
            class="font-mono text-xs transition-colors"
            :class="isActive(link.path) ? 'text-retro-red' : 'text-retro-muted hover:text-retro-text'"
          >
            {{ link.label }}<span v-if="isActive(link.path)" class="text-retro-red">_</span>
          </RouterLink>
        </li>
        <li>
          <a
            :href="profile.social.github"
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors"
          >GitHub ↗</a>
        </li>
      </ul>

      <button
        class="md:hidden font-mono text-xs text-retro-muted hover:text-retro-text transition-colors"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? '[close]' : '[menu]' }}
      </button>
    </nav>

    <Transition name="slide">
      <div v-if="menuOpen" class="md:hidden border-t border-retro-border bg-retro-bg px-4 py-4">
        <ul class="flex flex-col gap-3">
          <li>
            <RouterLink to="/" class="font-mono text-sm text-retro-muted hover:text-retro-red transition-colors" @click="menuOpen = false">Home</RouterLink>
          </li>
          <li v-for="link in navLinks" :key="link.name">
            <RouterLink
              :to="link.path"
              class="font-mono text-sm transition-colors"
              :class="isActive(link.path) ? 'text-retro-red' : 'text-retro-muted hover:text-retro-text'"
              @click="menuOpen = false"
            >{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: all 0.15s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
