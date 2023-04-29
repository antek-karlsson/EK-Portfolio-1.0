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
import { content } from '@/api/data/content/projects/rheumapp';

const messageTitle = content.cta.message.title;
const messageTexts = content.cta.message.texts;
const brandTitle = content.cta.brand.title;
const brandText = content.cta.brand.text;
</script>

<style lang="scss" scoped>
.cta {
  @include flex(column, space-between, center, 0);
  width: 100%;
  height: 115rem;
  background-image: url('/img/rheumapp/rheumapp-cta-600.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  padding: 8rem 2.5rem;

  @include tablet {
    padding: 5.6rem 2.5rem 8rem 2.5rem;
    height: 92rem;
    //TODO: replace bg-image
    background-image: url('/img/rheumapp/rheumapp-cta-900.png');
  }

  @include tablet-landscape {
    justify-content: center;
    gap: 4.8rem;
    height: 75rem;
    background-image: url('/img/rheumapp/rheumapp-cta-1440.png');
    padding: 5.6rem 4.8rem;
  }

  @include desktop {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 5.6rem 9.6rem;
  }

  @include desktop-lg {
    padding: 8rem 15rem;
    justify-content: center;
    gap: 25.6rem;
    background-image: url('/img/rheumapp/rheumapp-cta-2467.png');
    height: 90rem;
  }

  @include desktop-xl {
    padding: 8rem 25.6rem;
  }

  @include desktop-2xl {
    padding: 8rem 46rem;
    justify-content: space-between;
    height: 120rem;
  }

  &__section {
    @include flex($direction: column, $gap: 2.4rem);

    @include tablet {
      align-self: flex-end;
    }

    @include desktop {
      align-self: flex-start;
    }

    &--brand {
      @include tablet {
        align-self: flex-start;
      }

      @include tablet-landscape {
        max-width: 45rem;
        align-self: flex-end;
      }
    }
  }

  &__section-title {
    text-align: right;
    align-self: flex-end;
    max-width: 25rem;
    font-family: $playfair;
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 1.33;
    letter-spacing: -0.05em;
    color: $ra-white;
    margin-block-start: 8.6rem;
    margin-block-end: 18rem;

    @include tablet {
      text-align: left;
      margin-block-start: 0;
      max-width: 30rem;
      font-size: 4rem;
      margin-block-end: 3.6rem;
    }

    @include tablet-landscape {
      text-align: center;
      max-width: 100%;
      margin-block-end: 0;
    }

    &--brand {
      align-self: flex-start;
      font-size: 5.2rem;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }

  &__section-text {
    font-family: $lato;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: 0.01em;
    color: $ra-white;

    @include tablet {
      max-width: 28rem;
    }

    @include tablet-landscape {
      max-width: 43rem;
    }

    @include desktop {
      font-size: 2rem;
    }

    &:nth-child(4) {
      // margin-block-start: 4.8rem;
      @include desktop {
        margin-block-start: 6.4rem;
      }
    }

    &--brand {
      line-height: 1.75;
      letter-spacing: 0.02em;
    }
  }
}
</style>
