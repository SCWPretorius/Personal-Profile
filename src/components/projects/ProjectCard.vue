<script setup lang="ts">
import type { Project } from '@/data/projects'
import Badge from '@/components/ui/Badge.vue'
import Card from '@/components/ui/Card.vue'

defineProps<{ project: Project }>()
</script>

<template>
  <Card :hover="true" class="flex flex-col gap-4 group">
    <div v-if="project.imageUrl" class="aspect-video overflow-hidden -mx-6 -mt-6 mb-2">
      <img :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
    </div>
    <div v-else class="aspect-video bg-retro-bg border border-dashed border-retro-border -mx-6 -mt-6 mb-2 flex items-center justify-center">
      <span class="font-mono text-xs text-retro-muted">no preview</span>
    </div>
    <h3 class="font-mono text-sm font-bold text-retro-text group-hover:text-retro-red transition-colors">{{ project.title }}</h3>
    <p class="font-sans text-sm text-retro-muted leading-relaxed flex-1">{{ project.description }}</p>
    <div class="flex flex-wrap gap-1.5">
      <Badge v-for="tag in project.tags" :key="tag" variant="default">{{ tag }}</Badge>
    </div>
    <div class="flex items-center gap-4 pt-2 border-t border-retro-border">
      <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">GitHub ↗</a>
      <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">Live ↗</a>
    </div>
  </Card>
</template>
