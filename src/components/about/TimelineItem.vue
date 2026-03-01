<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'

interface Props {
  title: string
  subtitle: string
  period: string
  description: string
  tags?: string[]
  current?: boolean
}

withDefaults(defineProps<Props>(), { tags: () => [], current: false })
</script>

<template>
  <div class="relative pl-6 pb-10 border-l border-retro-border last:border-l-transparent last:pb-0">
    <div class="absolute -left-1.5 top-0 w-3 h-3 border-2" :class="current ? 'border-retro-red bg-retro-red' : 'border-retro-border bg-retro-bg'" />
    <div class="space-y-2">
      <div class="flex flex-wrap items-center gap-2">
        <h3 class="font-mono text-sm font-bold text-retro-text">{{ title }}</h3>
        <Badge v-if="current" variant="red" class="text-[10px]">current</Badge>
      </div>
      <p class="font-mono text-xs text-retro-red">{{ subtitle }}</p>
      <p class="font-mono text-xs text-retro-muted">{{ period }}</p>
      <p class="font-sans text-sm text-retro-muted leading-relaxed max-w-xl pt-1">{{ description }}</p>
      <div v-if="tags?.length" class="flex flex-wrap gap-1.5 pt-1">
        <Badge v-for="tag in tags" :key="tag" variant="default">{{ tag }}</Badge>
      </div>
    </div>
  </div>
</template>
