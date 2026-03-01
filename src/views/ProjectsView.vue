<script setup lang="ts">
import ProjectCard from '@/components/projects/ProjectCard.vue'
import { projects } from '@/data/projects'

const featuredProjects = projects.filter(p => p.featured)
const otherProjects = projects.filter(p => !p.featured)
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-16">
    <div class="mb-12">
      <p class="font-mono text-xs text-retro-red mb-2">// selected work</p>
      <h1 class="font-mono text-3xl sm:text-4xl font-bold text-retro-text mb-4">Projects</h1>
      <p class="font-sans text-retro-muted max-w-lg">Things I've built — side projects, open-source tools, and experiments.</p>
    </div>

    <section class="mb-12">
      <div class="flex items-center gap-3 mb-8">
        <span class="font-mono text-xs text-retro-red">featured</span>
        <div class="flex-1 h-px bg-retro-border"></div>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard v-for="project in featuredProjects" :key="project.title" :project="project" />
      </div>
    </section>

    <section v-if="otherProjects.length">
      <div class="flex items-center gap-3 mb-8">
        <span class="font-mono text-xs text-retro-muted">other</span>
        <div class="flex-1 h-px bg-retro-border"></div>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard v-for="project in otherProjects" :key="project.title" :project="project" />
      </div>
    </section>
  </div>
</template>
