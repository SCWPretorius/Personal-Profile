<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  as: 'button',
  class: '',
})

const base = 'inline-flex items-center justify-center font-mono transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
const variants: Record<string, string> = {
  primary: 'bg-retro-red text-retro-bg border border-retro-red hover:bg-transparent hover:text-retro-red',
  outline: 'bg-transparent text-retro-text border border-retro-border hover:border-retro-red hover:text-retro-red',
  ghost: 'bg-transparent text-retro-muted border border-transparent hover:text-retro-red',
}
const sizes: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}
</script>

<template>
  <component
    :is="as"
    :class="cn(base, variants[variant], sizes[size], props.class)"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
