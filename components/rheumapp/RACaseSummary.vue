<template>
  <div class="case-summary">
    <ProjectSection>
      <button class="case-summary__button" @click="scrollToFinalDesign">{{ actionButton }}</button>
    </ProjectSection>
    <ProjectSection>
      <h3 class="case-summary__title">{{ title }}</h3>
      <ProjectSubSection v-for="(section, id) in lightSections" :key="id" :title="section.title">
        <template #textRegularFirst>
          <p v-for="(text, idx) in section.texts" :key="idx">
            {{ text }}
          </p>
        </template>
        <template v-if="section.subTitles" #textBold>
          <p v-for="(subtitle, idx) in section.subTitles" :key="idx">
            {{ subtitle }}
          </p>
        </template>
      </ProjectSubSection>
      <div class="case-summary__slogan">
        <div v-html="slogan"></div>
      </div>
    </ProjectSection>
    <ProjectSection is-dark project="rheumapp">
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
    </ProjectSection>
    <div class="case-summary__hero">
      <div class="case-summary__hero-content">
        <img class="case-summary__hero-logo" :src="`/img/rheumapp/${logo.url}`" :alt="logo.alt" />
        <h4 class="case-summary__hero-title">{{ heroTitle }}</h4>
        <p class="case-summary__hero-text">{{ heroText }}</p>
      </div>
      <img class="case-summary__hero-img" :src="`/img/rheumapp/${image.url}`" :alt="image.alt" />
    </div>
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

import { content } from '@/api/data/content/projects/rheumapp';
const { title, actionButton, slogan, lightSections, darkSections, processHighlights, hero } = content.caseSummary;
const { title: heroTitle, text: heroText, logo, image } = hero;

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
    @include ra-base-button;
    align-self: flex-end;
  }

  &__title {
    @include section-title;
  }

  &__slogan {
    align-self: center;
    display: inline;
    font-family: $playfair;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 1.62;
    letter-spacing: -0.05rem;
    color: $ra-black;
  }

  &__solution {
    @include tablet {
      max-width: none;
    }
  }

  &__hero {
    position: relative;
    margin-block-start: -1px;
    background: linear-gradient(180deg, #007484 20.63%, #0d8c9d 39.92%, #1ca5b8 52.87%, #a1d8df 76.67%, #f9f9f9 95.28%);
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-inline: 2.4rem;
    gap: 4.8rem;

    @include tablet {
      padding-inline: 3.2rem;
      background: linear-gradient(
        180deg,
        #007484 24.63%,
        #0d8c9d 43.92%,
        #1ca5b8 56.87%,
        #a1d8df 80.67%,
        #f9f9f9 99.28%
      );
    }

    @include tablet-landscape {
      padding-inline: 6.4rem;
      background: linear-gradient(
        180deg,
        #007484 28.63%,
        #0d8c9d 47.92%,
        #1ca5b8 60.87%,
        #a1d8df 84.67%,
        #f9f9f9 99.28%
      );
    }

    @include desktop {
      background: linear-gradient(
        180deg,
        #007484 12.63%,
        #0d8c9d 31.92%,
        #1ca5b8 44.87%,
        #a1d8df 68.67%,
        #f9f9f9 87.28%
      );
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    @include desktop-lg {
      padding-inline: 12.8rem;
      gap: 16rem;
    }

    @include desktop-xl {
      gap: 16rem;
    }
  }

  &__hero-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  &__hero-logo {
    max-width: 49rem;
    width: 100%;
  }

  &__hero-title {
    font-family: $lato;
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 1.3;
    color: #363939;

    @include desktop {
      font-size: 6.4rem;
    }
  }

  &__hero-text {
    max-width: 50rem;
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.5;
    color: #2b2b2b;

    @include desktop {
      font-size: 2.4rem;
    }
  }

  &__hero-img {
    position: relative;
    right: 0;
    top: -2rem;
    max-width: 62.4rem;
    width: 100%;
    height: 100%;
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
