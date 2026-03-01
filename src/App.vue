<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-retro-bg grain">
    <NavBar />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.page-enter-active, .page-leave-active { transition: opacity 0.18s ease; }
.page-enter-from, .page-leave-to { opacity: 0; }
</style>
