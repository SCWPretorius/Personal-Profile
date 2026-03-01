<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const text = ref('')
const fullText = 'ERROR: Page not found. The document you are looking for has been moved, deleted, or never existed.'
let index = 0
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    if (index < fullText.length) {
      text.value += fullText[index]
      index++
    } else {
      clearInterval(interval)
    }
  }, 30)
})

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-16 min-h-[60vh] flex flex-col justify-center">
    <div class="max-w-lg">
      <p class="font-mono text-xs text-retro-muted mb-4">
        <span class="text-retro-red">system</span>@portfolio:~$
      </p>
      <div class="font-mono text-7xl sm:text-9xl font-bold text-retro-red mb-6 leading-none">404</div>
      <div class="font-mono text-sm text-retro-muted mb-8 min-h-[3rem]">
        {{ text }}<span class="inline-block w-2 h-4 bg-retro-red align-middle ml-0.5 animate-blink"></span>
      </div>
      <RouterLink to="/" class="font-mono text-xs text-retro-red hover:underline">→ cd ~/home</RouterLink>
    </div>
  </div>
</template>
