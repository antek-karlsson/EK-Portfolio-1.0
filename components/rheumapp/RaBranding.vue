<template>
  <ProjectSection class="light-gray">
    <div class="branding">
      <h3 class="branding__title">{{ title }}</h3>
      <p class="branding__text">{{ texts.main }}</p>
      <div class="branding__content">
        <img class="branding__fonts" :src="`/img/rheumapp/${fonts.url}`" :alt="fonts.alt" />
        <div class="branding__colors">
          <div class="branding__colors-primary">
            <h6 class="branding__colors-title">{{ colors.primary.title }}</h6>
            <div class="branding__colors-primary-container">
              <RaColorSwatch
                v-for="(color, colorId) in colors.primary.swatches"
                :key="colorId"
                :color="color"
                :label="color"
              />
            </div>
          </div>
          <div class="branding__colors-accents">
            <h6 class="branding__colors-title">{{ colors.accents.title }}</h6>
            <div class="branding__colors-accents-container">
              <div
                v-for="(group, groupId) in colors.accents.swatchGroups"
                :key="groupId"
                class="branding__colors-accents-group"
              >
                <RaColorSwatch v-for="(color, colorId) in group.colors" :key="colorId" :color="color" :label="color" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="branding__text">{{ texts.secondary }}</p>
      <img :src="`/img/rheumapp/${logo.url}`" :alt="logo.alt" />
    </div>
  </ProjectSection>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/rheumapp';
const { title, texts, fonts, colors, logo } = content.branding;
</script>

<style lang="scss" scoped>
.light-gray {
  background-color: $light-gray;
}
.branding {
  @include flex(column, $gap: 8.6rem);

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

  &__content {
    width: 100%;
    @include flex(column, $gap: 6.4rem);

    @include tablet-landscape {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &__fonts {
    align-self: center;
    max-width: 35rem;

    @include tablet-landscape {
      align-self: flex-start;
    }
  }

  &__colors {
    @include flex(column, $gap: 4.8rem);

    @include tablet {
      gap: 1rem;
    }
  }

  &__colors-title {
    font-family: $lato;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.18;
    letter-spacing: -0.05em;
    color: $carbon;
  }

  &__colors-primary {
    @include flex(column);
  }

  &__colors-primary-container {
    @include flex(row);
    padding: 1.2rem;
    background: linear-gradient(
      242.1deg,
      rgba(218, 235, 242, 0.8) 9.88%,
      rgba(155, 204, 210, 0.8) 38.94%,
      rgba(28, 165, 184, 0.8) 91.08%
    );

    @include tablet {
      padding: 1.5rem;
      gap: 4rem;
    }
  }

  &__colors-accents {
    @include flex(column);

    @include tablet {
      flex-direction: column-reverse;
    }
  }

  &__colors-accents-container {
    @include flex(column);

    @include tablet {
      flex-direction: row;
    }
  }

  &__colors-accents-group {
    @include flex(row);
    padding: 1.2rem;

    &:nth-child(1) {
      background: linear-gradient(-45deg, #feeced -0.39%, #ffc5c8 39.15%, #ffa6ab 65.18%, #de535c 107.48%);
    }

    &:nth-child(2) {
      background: linear-gradient(-45deg, #d2ecf8 5.33%, #7cbcda 43.26%, #359fd0 99.07%);
    }

    &:nth-child(3) {
      background: linear-gradient(-45deg, #e3f3f2 2.04%, #b9e3e1 28.39%, #9ac7c7 108.78%);
    }

    @include tablet {
      padding: 1.5rem;
      flex-direction: column;
    }
  }

  img {
    max-width: 35rem;
    width: 100%;
  }
}
</style>
