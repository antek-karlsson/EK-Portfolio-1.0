<template>
  <div class="cta">
    <div class="cta__section">
      <h1 class="cta__section-title">{{ messageTitle }}</h1>
      <p v-for="(text, id) in messageTexts" :key="id" class="cta__section-text" v-html="text" />
    </div>
    <div class="cta__section cta__section--brand">
      <h2 class="cta__section-title cta__section-title--brand">{{ brandTitle }}</h2>
      <p class="cta__section-text cta__section-text--brand">{{ brandText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/musearch';

const messageTitle = content.cta.message.title;
const messageTexts = content.cta.message.texts;
const brandTitle = content.cta.brand.title;
const brandText = content.cta.brand.text;
</script>

<style lang="scss" scoped>
.cta {
  @include flex(column, space-between, center, 0);
  width: 100%;
  height: 120rem;
  background-image: url('/img/musearch/musearch-cta-600.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  padding: 8rem 2.5rem;

  @include tablet {
    padding: 5.6rem 2.5rem 8rem 2.5rem;
    height: 98rem;
    background-image: url('/img/musearch/musearch-cta-900.png');
  }

  @include tablet-landscape {
    @include flex(row-reverse, space-between, center, 0);
    height: 75rem;
    background-image: url('/img/musearch/musearch-cta-1440.png');
    padding: 5.6rem 4.8rem;
  }

  @include desktop {
    height: 92.2rem;
    padding: 5.6rem 9.6rem;
  }

  @include desktop-lg {
    padding: 8rem 15rem;
    background-image: url('/img/musearch/musearch-cta-2467.png');
  }

  @include desktop-2xl {
    height: 164.5rem;
  }

  &__section {
    @include flex($direction: column, $gap: 2.4rem);

    @include tablet-landscape {
      max-width: 45rem;
      align-self: flex-start;
    }

    &--brand {
      @include tablet-landscape {
        max-width: 51.7rem;
        align-self: flex-end;
      }
    }
  }

  &__section-title {
    font-family: $playfair;
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 1.33;
    letter-spacing: -0.05em;
    color: $white-smoke;
    margin-bottom: 28rem;

    @include tablet {
      font-size: 4.8rem;
      margin-bottom: 24rem;
    }

    @include tablet-landscape {
      margin-bottom: 0;
    }

    &--brand {
      font-size: 5.2rem;
      margin-bottom: 0;
    }
  }

  &__section-text {
    font-family: $lato;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.33;
    letter-spacing: 0.01em;
    color: $white-smoke;

    &--brand {
      line-height: 1.75;
      letter-spacing: 0.02em;
    }
  }
}
</style>
