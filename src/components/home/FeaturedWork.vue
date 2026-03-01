<script setup lang="ts">
import { projects } from '@/data/projects'
import { useBlogPosts } from '@/composables/useBlogPosts'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import BlogCard from '@/components/blog/BlogCard.vue'

const { posts } = useBlogPosts()
const featuredProjects = projects.filter(p => p.featured).slice(0, 3)
const latestPost = posts.value[0]
</script>

<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
    <div class="flex items-center gap-3 mb-8">
      <span class="font-mono text-xs text-retro-red">01</span>
      <h2 class="font-mono text-lg font-bold text-retro-text">Featured Projects</h2>
      <div class="flex-1 h-px bg-retro-border"></div>
      <RouterLink to="/projects" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">all projects →</RouterLink>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
      <ProjectCard v-for="project in featuredProjects" :key="project.title" :project="project" />
    </div>

    <div v-if="latestPost">
      <div class="flex items-center gap-3 mb-8">
        <span class="font-mono text-xs text-retro-red">02</span>
        <h2 class="font-mono text-lg font-bold text-retro-text">Latest Writing</h2>
        <div class="flex-1 h-px bg-retro-border"></div>
        <RouterLink to="/blog" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">all posts →</RouterLink>
      </div>
      <BlogCard :post="latestPost" />
    </div>
  </section>
</template>
