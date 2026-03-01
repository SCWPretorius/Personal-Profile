<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  variant?: 'default' | 'red' | 'outline'
  class?: string
}

const props = withDefaults(defineProps<Props>(), { variant: 'default', class: '' })
const variants: Record<string, string> = {
  default: 'bg-retro-surface text-retro-muted border border-retro-border',
  red: 'bg-retro-red text-retro-bg border border-retro-red',
  outline: 'bg-transparent text-retro-red border border-retro-red',
}
</script>

<template>
  <span :class="cn('inline-flex items-center font-mono text-xs px-2 py-0.5', variants[variant], props.class)">
    <slot />
  </span>
</template>
