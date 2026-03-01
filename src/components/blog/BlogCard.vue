<script setup lang="ts">
import type { PostMeta } from '@/composables/useBlogPosts'
import Badge from '@/components/ui/Badge.vue'
import Card from '@/components/ui/Card.vue'

defineProps<{ post: PostMeta }>()
</script>

<template>
  <RouterLink :to="`/blog/${post.slug}`" class="block group">
    <Card :hover="true" class="flex flex-col gap-3">
      <div class="flex items-center gap-2 text-retro-muted font-mono text-xs">
        <span>{{ post.date }}</span>
        <span>—</span>
        <div class="flex flex-wrap gap-1">
          <Badge v-for="tag in post.tags" :key="tag" variant="default">{{ tag }}</Badge>
        </div>
      </div>
      <h3 class="font-mono text-sm font-bold text-retro-text group-hover:text-retro-red transition-colors leading-snug">{{ post.title }}</h3>
      <p class="font-sans text-sm text-retro-muted leading-relaxed">{{ post.excerpt }}</p>
      <span class="font-mono text-xs text-retro-red">Read more →</span>
    </Card>
  </RouterLink>
</template>
