<template>
  <div class="case-summary">
    <ProjectSection>
      <button class="case-summary__button" @click="scrollToFinalDesign">{{ actionButton }}</button>
    </ProjectSection>
    <ProjectSection>
      <h3 class="case-summary__title">{{ title }}</h3>
      <ProjectSubSection v-for="(section, id) in lightSections" :key="id" :title="section.title">
        <template v-if="section.subTitles" #textBold>
          <p v-for="(subtitle, idx) in section.subTitles" :key="idx">
            {{ subtitle }}
          </p>
        </template>
        <template #textRegular>
          <p v-for="(text, idx) in section.texts" :key="idx">
            {{ text }}
          </p>
        </template>
      </ProjectSubSection>
      <div class="case-summary__statistic">
        <div v-html="statistic"></div>
      </div>
    </ProjectSection>
    <ProjectSection is-dark double>
      <ProjectSubSection
        v-for="(section, id) in darkSections"
        :key="id"
        class="case-summary__solution"
        :title="section.title"
        is-dark
      >
        <template #textBold>
          <p v-for="(subtitle, idx) in section.subTitles" :key="idx">
            {{ subtitle }}
          </p>
        </template>
        <template #textRegular>
          <p v-for="(text, idx) in section.texts" :key="idx" class="text-regular-mt">
            {{ text }}
          </p>
        </template>
      </ProjectSubSection>
      <div class="case-summary__images">
        <img
          v-for="(img, id) in images"
          :key="id"
          class="case-summary__image"
          :src="`/img/musearch/${img.url}`"
          :alt="img.alt"
        />
      </div>
    </ProjectSection>
    <ProjectSection>
      <div class="case-summary__highlights">
        <div v-for="(highlight, id) in processHighlights" :key="id" class="case-summary__highlight">
          <h5 class="case-summary__highlight-title">{{ highlight.title }}</h5>
          <p class="case-summary__highlight-text">{{ highlight.text }}</p>
        </div>
      </div>
    </ProjectSection>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { content } from '@/api/data/content/projects/musearch';
const { title, actionButton, statistic, lightSections, darkSections, processHighlights, images } = content.caseSummary;

if (process.client) {
  gsap.registerPlugin(ScrollToPlugin);
}

function scrollToFinalDesign() {
  gsap.to(window, { duration: 0.01, scrollTo: { y: '#final-design', offsetY: 60 } });
}
</script>

<style lang="scss" scoped>
.case-summary {
  @include flex(column, center, center, 0);

  &__button {
    @include base-button;
  }

  &__title {
    @include section-title;
  }

  &__statistic {
    align-self: center;

    :deep(h4) {
      display: inline;
      font-family: $playfair;
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 1.62;
      letter-spacing: -0.05rem;
      color: $black;
    }

    :deep(span) {
      display: inline;
      font-family: $lato;
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 1.46;
      letter-spacing: -0.05rem;
      color: $carbon;
    }
  }

  &__solution {
    @include tablet {
      max-width: none;
    }

    @include tablet-landscape {
      max-width: 20rem;
      align-self: center;
    }

    @include desktop {
      max-width: 30rem;
    }

    @include desktop-lg {
      max-width: 36.2rem;
    }
  }

  &__images {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;

    @include tablet-landscape {
      gap: 2rem;
    }
  }

  &__image {
    max-width: 100%;

    @include tablet {
      width: auto;
    }

    @include tablet-landscape {
      max-width: 100%;
    }
  }

  &__highlights {
    @include flex(column, center, flex-start, 2.8rem);

    @include tablet {
      @include flex(row, space-between, flex-start);
    }
  }

  &__highlight {
    @include flex(column, center, flex-start, 1rem);

    @include tablet {
      max-width: 17.5rem;
    }
  }

  &__highlight-title {
    font-family: $lato;
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.75;
    letter-spacing: 0.02em;
    color: $carbon;
  }

  &__highlight-text {
    font-family: $lato;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.5;
    color: $carbon;
  }
}

.text-regular-mt {
  margin-top: 2.4rem;

  @include desktop {
    margin-top: 4.8rem;
  }
}
</style>
