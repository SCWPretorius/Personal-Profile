<script setup lang="ts">
import { useBlogPosts } from '@/composables/useBlogPosts'
import BlogCard from '@/components/blog/BlogCard.vue'

const { posts } = useBlogPosts()
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-16">
    <div class="mb-12">
      <p class="font-mono text-xs text-retro-red mb-2">// writing</p>
      <h1 class="font-mono text-3xl sm:text-4xl font-bold text-retro-text mb-4">Blog</h1>
      <p class="font-sans text-retro-muted">Notes, tutorials, and opinions on software development.</p>
    </div>

    <div v-if="posts.length" class="grid gap-4">
      <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
    </div>
    <div v-else class="font-mono text-sm text-retro-muted">
      <span class="text-retro-red">$</span> find ./posts — no posts yet...
    </div>
  </div>
</template>
