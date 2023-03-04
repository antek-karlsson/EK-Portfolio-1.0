<template>
  <div v-if="isScreenMobile" class="cta-mobile">
    <div class="cta-mobile__section cta-mobile__section--brand">
      <h2 class="cta-mobile__section-title cta-mobile__section-title--brand">{{ brandTitle }}</h2>
      <p class="cta-mobile__section-text cta-mobile__section-text--brand">{{ brandText }}</p>
    </div>
    <div class="cta-mobile__section">
      <h1 class="cta-mobile__section-title">{{ messageTitle }}</h1>
      <p v-for="(text, id) in messageTexts" :key="id" class="cta-mobile__section-text" v-html="text" />
    </div>
  </div>
  <div v-else class="cta-desktop">
    <div class="cta-desktop__section cta-desktop__section--brand">
      <h2 class="cta-desktop__section-title cta-desktop__section-title--brand">{{ brandTitle }}</h2>
      <p class="cta-desktop__section-text cta-desktop__section-text--brand">{{ brandText }}</p>
    </div>
    <div class="cta-desktop__section">
      <h1 class="cta-desktop__section-title">{{ messageTitle }}</h1>
      <p v-for="(text, id) in messageTexts" :key="id" class="cta-desktop__section-text" v-html="text" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/musearch';
import breakpoints from '@/api/data/constants/mediaQueries';
const isScreenMobile = useMediaQuery(breakpoints.sm);

const messageTitle = content.cta.message.title;
const messageTexts = content.cta.message.texts;
const brandTitle = content.cta.brand.title;
const brandText = content.cta.brand.text;
</script>

<style lang="scss" scoped>
.cta-mobile {
  @include flex(column-reverse, space-between, center);
  width: 100%;
  height: 127rem;
  background-image: url('/img/musearch/musearch-cta-mobile.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  padding: 5.6rem 2.5rem;

  @include tablet {
    padding: 12rem 3.2rem 8rem 3.2rem;
  }

  &__section {
    max-width: 57rem;
    @include flex($direction: column, $gap: 2.4rem);

    @include tablet {
      max-width: 100%;
    }

    &--brand {
      max-width: 51.7rem;
    }
  }

  &__section-title {
    font-family: $playfair;
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 1.33;
    letter-spacing: -0.05em;
    color: $white-smoke;
    margin-bottom: 32.4rem;

    @include tablet {
      font-size: 4.8rem;
      margin-bottom: 42rem;
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

.cta-desktop {
  @include flex(row, space-between, center);
  width: 100%;
  height: 100vh;
  background-image: url('/img/musearch/musearch-cta-desktop.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  padding: 5.6rem 3.2rem;

  @include desktop-2xl {
    background-size: cover;
    padding: 8rem 25.6rem;
  }

  &__section {
    max-width: 40rem;
    @include flex($direction: column, $gap: 2.4rem);
    align-self: flex-start;

    &--brand {
      max-width: 51.7rem;
      align-self: flex-end;
    }
  }

  &__section-title {
    font-family: $playfair;
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 1.33;
    letter-spacing: -0.05em;
    color: $white-smoke;

    &--brand {
      font-size: 5.2rem;
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
