<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProject } from '@/composables/useProjects'
import MarkdownRenderer from '@/components/blog/MarkdownRenderer.vue'
import Badge from '@/components/ui/Badge.vue'

const route = useRoute()
const router = useRouter()

const slug = computed(() => String(route.params.slug))
const project = computed(() => useProject(slug.value))

watchEffect(() => {
  if (slug.value && project.value === null) {
    router.replace({ name: 'not-found' })
  }
})
</script>

<template>
  <div v-if="project" class="max-w-3xl mx-auto px-4 sm:px-6 py-16">
    <RouterLink to="/projects" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors inline-flex items-center gap-1 mb-10">← back to projects</RouterLink>

    <header class="mb-10">
      <div class="flex flex-wrap gap-1 mb-4">
        <Badge v-for="tag in project.tags" :key="tag" variant="default">{{ tag }}</Badge>
      </div>
      <h1 class="font-mono text-2xl sm:text-4xl font-bold text-retro-text leading-tight mb-4">{{ project.title }}</h1>
      <p v-if="project.description" class="font-sans text-retro-muted text-lg leading-relaxed">{{ project.description }}</p>
      <div class="flex items-center gap-4 mt-6">
        <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">GitHub ↗</a>
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">Live ↗</a>
      </div>
    </header>

    <div class="border-t border-retro-border mb-10"></div>
    <MarkdownRenderer :html="project.html" />
    <div class="border-t border-retro-border mt-12 pt-8">
      <RouterLink to="/projects" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">← back to projects</RouterLink>
    </div>
  </div>
</template>
