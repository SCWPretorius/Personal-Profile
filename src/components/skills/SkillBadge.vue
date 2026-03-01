<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <div class="font-mono text-xs border border-retro-border text-retro-muted px-3 py-1.5 hover:border-retro-red hover:text-retro-text transition-all duration-150 cursor-default">
    {{ name }}
  </div>
</template>
