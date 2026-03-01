<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import { Code2, Layout, Lightbulb, Server } from 'lucide-vue-next'

const iconMap: Record<string, unknown> = { Code2, Layout, Lightbulb, Server }

interface Props {
  title: string
  description: string
  icon: string
}

const props = defineProps<Props>()
const IconComponent = iconMap[props.icon] ?? Code2
</script>

<template>
  <Card :hover="true" class="flex flex-col gap-4">
    <div class="w-8 h-8 text-retro-red">
      <component :is="IconComponent" :size="24" :stroke-width="1.5" />
    </div>
    <h3 class="font-mono text-sm font-bold text-retro-text">{{ title }}</h3>
    <p class="font-sans text-sm text-retro-muted leading-relaxed">{{ description }}</p>
  </Card>
</template>
