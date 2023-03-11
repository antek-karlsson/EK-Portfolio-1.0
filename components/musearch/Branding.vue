<template>
  <ProjectSection class="white-smoke">
    <div class="branding">
      <h3 class="branding__title">{{ title }}</h3>
      <p class="branding__text">{{ texts.main }}</p>
      <img class="branding__fonts" :src="`/img/musearch/${fonts.url}`" :alt="fonts.alt" />
      <div class="branding__colors">
        <div class="branding__colors-primary">
          <h6 class="branding__colors-title">{{ colors.primary.title }}</h6>
          <div class="branding__colors-primary-container">
            <ColorSwatch
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
              <ColorSwatch v-for="(color, colorId) in group.colors" :key="colorId" :color="color" :label="color" />
            </div>
          </div>
        </div>
      </div>
      <p class="branding__text">{{ texts.secondary }}</p>
      <img :src="`/img/musearch/${logo.url}`" :alt="logo.alt" />
    </div>
  </ProjectSection>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/musearch';
const { title, texts, fonts, colors, logo } = content.branding;
</script>

<style lang="scss" scoped>
.white-smoke {
  background-color: $white-smoke;
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

  &__fonts {
    align-self: center;
    // @include flex(row, center, flex-start, 5.2rem);
  }

  &__colors {
    @include flex(column, $gap: 4.8rem);

    @include tablet-landscape {
      @include flex(row, $gap: 6.2rem);
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

  &__colors-accents {
    @include flex(column);
  }

  &__colors-accents-container {
    @include flex($gap: 1.6rem);
    flex-wrap: wrap;
  }
}
</style>
