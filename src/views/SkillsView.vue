<script setup lang="ts">
import SkillBadge from '@/components/skills/SkillBadge.vue'
import ServiceCard from '@/components/skills/ServiceCard.vue'
import { skills } from '@/data/skills'
import { services } from '@/data/services'
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-16">
    <div class="mb-12">
      <p class="font-mono text-xs text-retro-red mb-2">// skills &amp; services</p>
      <h1 class="font-mono text-3xl sm:text-4xl font-bold text-retro-text mb-4">What I Work With</h1>
      <p class="font-sans text-retro-muted max-w-lg">Technologies and services I offer. Always learning, always building.</p>
    </div>

    <section class="mb-16">
      <div class="flex items-center gap-3 mb-8">
        <span class="font-mono text-xs text-retro-red">01</span>
        <h2 class="font-mono text-lg font-bold text-retro-text">Skills</h2>
        <div class="flex-1 h-px bg-retro-border"></div>
      </div>
      <div class="space-y-8">
        <div v-for="category in skills" :key="category.category">
          <p class="font-mono text-xs text-retro-muted mb-3"><span class="text-retro-red">→</span> {{ category.category }}</p>
          <div class="flex flex-wrap gap-2">
            <SkillBadge v-for="skill in category.items" :key="skill" :name="skill" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="flex items-center gap-3 mb-8">
        <span class="font-mono text-xs text-retro-red">02</span>
        <h2 class="font-mono text-lg font-bold text-retro-text">Services</h2>
        <div class="flex-1 h-px bg-retro-border"></div>
      </div>
      <div class="grid sm:grid-cols-2 gap-4">
        <ServiceCard v-for="service in services" :key="service.title" :title="service.title" :description="service.description" :icon="service.icon" />
      </div>
    </section>
  </div>
</template>
