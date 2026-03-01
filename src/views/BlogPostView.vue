<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePost } from '@/composables/useBlogPosts'
import MarkdownRenderer from '@/components/blog/MarkdownRenderer.vue'
import Badge from '@/components/ui/Badge.vue'

const route = useRoute()
const router = useRouter()

const slug = computed(() => String(route.params.slug))
const post = computed(() => usePost(slug.value))

// Use watchEffect so this re-runs on every reactive slug change,
// handling component reuse by Vue Router on /blog/:slug navigation.
watchEffect(() => {
  if (slug.value && post.value === null) {
    router.replace({ name: 'not-found' })
  }
})
</script>

<template>
  <div v-if="post" class="max-w-3xl mx-auto px-4 sm:px-6 py-16">
    <RouterLink to="/blog" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors inline-flex items-center gap-1 mb-10">← back to blog</RouterLink>

    <header class="mb-10">
      <div class="flex items-center gap-2 font-mono text-xs text-retro-muted mb-4">
        <span>{{ post.date }}</span>
        <span v-if="post.tags.length">—</span>
        <div class="flex flex-wrap gap-1">
          <Badge v-for="tag in post.tags" :key="tag" variant="default">{{ tag }}</Badge>
        </div>
      </div>
      <h1 class="font-mono text-2xl sm:text-4xl font-bold text-retro-text leading-tight mb-4">{{ post.title }}</h1>
      <p v-if="post.excerpt" class="font-sans text-retro-muted text-lg leading-relaxed">{{ post.excerpt }}</p>
    </header>

    <div class="border-t border-retro-border mb-10"></div>
    <MarkdownRenderer :html="post.html" />
    <div class="border-t border-retro-border mt-12 pt-8">
      <RouterLink to="/blog" class="font-mono text-xs text-retro-muted hover:text-retro-red transition-colors">← back to blog</RouterLink>
    </div>
  </div>
</template>
