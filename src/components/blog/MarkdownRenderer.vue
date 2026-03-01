<script setup lang="ts">
defineProps<{ html: string }>()
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <article
    class="prose prose-invert prose-sm sm:prose-base max-w-none
           prose-headings:font-mono prose-headings:text-retro-text
           prose-p:text-retro-muted prose-p:leading-relaxed
           prose-a:text-retro-red prose-a:no-underline hover:prose-a:underline
           prose-code:text-retro-red prose-code:font-mono prose-code:bg-retro-surface prose-code:px-1
           prose-pre:bg-retro-surface prose-pre:border prose-pre:border-retro-border
           prose-blockquote:border-l-retro-red prose-blockquote:text-retro-muted
           prose-strong:text-retro-text
           prose-hr:border-retro-border
           prose-li:text-retro-muted"
    v-html="html"
  />
</template>
