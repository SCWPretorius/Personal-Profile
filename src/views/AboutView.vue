<script setup lang="ts">
import ProfileCard from '@/components/about/ProfileCard.vue'
import TimelineItem from '@/components/about/TimelineItem.vue'
import { experience } from '@/data/experience'
import { education } from '@/data/education'
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 py-16">
    <ProfileCard />

    <section class="mb-16">
      <div class="flex items-center gap-3 mb-8">
        <span class="font-mono text-xs text-retro-red">01</span>
        <h2 class="font-mono text-lg font-bold text-retro-text">Experience</h2>
        <div class="flex-1 h-px bg-retro-border"></div>
      </div>
      <TimelineItem
        v-for="item in experience"
        :key="item.company + item.role"
        :title="item.role"
        :subtitle="item.company"
        :period="item.period"
        :description="item.description"
        :tags="item.tags"
        :current="item.current"
      />
    </section>

    <section>
      <div class="flex items-center gap-3 mb-8">
        <span class="font-mono text-xs text-retro-red">02</span>
        <h2 class="font-mono text-lg font-bold text-retro-text">Education</h2>
        <div class="flex-1 h-px bg-retro-border"></div>
      </div>
      <TimelineItem
        v-for="item in education"
        :key="item.institution"
        :title="item.degree"
        :subtitle="item.institution"
        :period="item.period"
        :description="item.description"
      />
    </section>
  </div>
</template>
