<template>
  <div class="hero">
    <h1 class="hero__title">{{ content.header }}</h1>
    <p class="hero__main">{{ content.main }}</p>
    <p class="hero__sub">{{ content.sub }}</p>
    <button class="hero__link" @click="scrollToProjects">{{ content.linkText }}</button>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { content } from '@/api/data/content/home/hero';

if (process.client) {
  gsap.registerPlugin(ScrollToPlugin);
}

function scrollToProjects() {
  gsap.to(window, { duration: 0.5, scrollTo: { y: '#projects', offsetY: 200 } });
}
</script>

<style lang="scss" scoped>
.hero {
  @include flex(column, flex-start, flex-start, 1.6rem);
  @include home-section-padding;
  color: $black;

  &__title {
    font-family: $playfair;
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 1.33;
    letter-spacing: 0.01em;
    @include desktop {
      font-size: 6.4rem;
    }
  }

  &__main {
    font-family: $lato;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.33;
    letter-spacing: 0.01em;
    margin-top: 1.6rem;

    @include desktop {
      font-size: 3.2rem;
    }
  }

  &__sub {
    font-family: $lato;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.33;
    letter-spacing: 0.01em;

    @include desktop {
      font-size: 2.4rem;
    }
  }

  &__link {
    font-family: $lato;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.33;
    letter-spacing: 0.01em;
    text-decoration: none;
    color: inherit;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid $black;
    margin-top: 2.4rem;
    transition: all 0.4s ease-out;

    @include desktop {
      font-size: 2rem;
    }

    @media (hover: hover) {
      &:hover {
        color: $dark-gray;
        border-color: $dark-gray;
        cursor: pointer;
      }
    }
  }
}
</style>
