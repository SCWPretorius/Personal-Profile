<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  class?: string
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), { class: '', hover: false })
</script>

<template>
  <div
    :class="cn(
      'bg-retro-surface border border-retro-border p-6',
      hover && 'transition-all duration-200 hover:border-retro-red hover:-translate-y-0.5',
      props.class
    )"
  >
    <slot />
  </div>
</template>
