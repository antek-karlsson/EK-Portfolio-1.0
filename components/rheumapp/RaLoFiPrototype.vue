<template>
  <ProjectSection>
    <div class="prototype">
      <h3 class="prototype__title">{{ title }}</h3>
      <p class="prototype__text">{{ text }}</p>
      <div class="prototype__img-container">
        <img class="prototype__image" :src="`/img/rheumapp/${image.url}`" :alt="image.alt" />
      </div>
    </div>
  </ProjectSection>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/rheumapp';
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
    align-self: flex-start;
    font-family: $lato;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: $carbon;
  }

  &__img-container {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    @include tablet-landscape {
      overflow-x: hidden;
      overflow-y: hidden;

      img {
        width: 100%;
      }
    }
  }
}
</style>
