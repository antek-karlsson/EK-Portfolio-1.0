<template>
  <div class="outcomes">
    <ProjectSection>
      <h3 class="outcomes__title">{{ title }}</h3>
      <ProjectSubSection v-for="(section, sectionId) in subSections" :key="sectionId" :title="section.title">
        <template #textRegular>
          <p>{{ section.text }}</p>
        </template>
      </ProjectSubSection>
    </ProjectSection>
  </div>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/rheumapp';

const { title, subSections } = content.outcomes;
</script>

<style lang="scss" scoped>
.outcomes {
  &__title {
    @include section-title;
  }
}
</style>
