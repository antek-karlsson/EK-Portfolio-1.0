<template>
  <div class="project-teaser">
    <NuxtLink :to="linkUrl">
      <img class="project-teaser__img" :src="`/img/home/project-teasers/${imgUrl}`" :alt="imgAlt" />
    </NuxtLink>
    <div class="project-teaser__text">
      <h2 class="project-teaser__title">{{ title }}</h2>
      <p class="project-teaser__description">{{ description }}</p>
      <NuxtLink class="project-teaser__link" :to="linkUrl">{{ linkText }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imgUrl: string;
  imgAlt: string;
}>();
</script>

<style lang="scss" scoped>
.project-teaser {
  @include flex(column, center, center, 2.4rem);
  @include section-padding;

  @include tablet {
    @include flex(column, flex-start, flex-start, 2.4rem);
  }

  @include tablet-landscape {
    @include flex(row, flex-start, flex-start, 6rem);
  }

  @include desktop {
    @include flex(row, flex-start, flex-start, 12rem);
  }

  &__img {
    width: 100%;
    border-radius: 0.4rem;
    box-shadow: 0 0.4rem 0.2rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;

    @include tablet-landscape {
      width: auto;
    }

    @media (hover: hover) {
      &:hover {
        transform: scale(1.07) translateX(0.5rem) translateY(0.5rem);
        cursor: pointer;
      }
    }
  }

  &__text {
    @include flex(column, flex-start, flex-start, 2.4rem);
  }

  &__title {
    font-family: $playfair;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 1.33;
    letter-spacing: 0.01em;

    @include tablet-landscape {
      font-size: 3.2rem;
    }
  }

  &__description {
    font-family: $lato;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.33;
    letter-spacing: 0.01em;

    @include tablet {
      max-width: 45.5rem;
    }

    @include tablet-landscape {
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
    border-bottom: 2px solid $black;
    transition: all 0.4s ease-out;

    @include desktop {
      font-size: 2rem;
    }

    @media (hover: hover) {
      &:hover {
        color: $dark-gray;
        border-color: $dark-gray;
      }
    }
  }
}
</style>
