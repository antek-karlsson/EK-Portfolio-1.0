<template>
  <ProjectSection>
    <div class="prototype">
      <h3 class="prototype__title">{{ title }}</h3>
      <p class="prototype__text">{{ text }}</p>
      <img class="prototype__image" :src="`/img/musearch/${image.url}`" :alt="image.alt" />
    </div>
  </ProjectSection>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/musearch';
const { title, text, image } = content.loFiPrototype;
</script>

<style lang="scss" scoped>
.prototype {
  @include flex(column, center, flex-start, 5rem);
  &__title {
    align-self: flex-start;
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.05em;
    color: $carbon;
  }

  &__text {
    max-width: 57rem;
    align-self: flex-start;
    font-family: $lato;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: $carbon;
  }

  &__image {
    align-self: center;
    max-width: 100%;
  }
}
</style>
