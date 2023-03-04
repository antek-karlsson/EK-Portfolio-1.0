<template>
  <div class="case-summary">
    <ProjectSection>
      <h3 class="case-summary__title">{{ title }}</h3>
      <ProjectSubSection v-for="(section, id) in lightSections" :key="id" :title="section.title">
        <template #textBold>
          <div v-if="section.subTitles">
            <p v-for="(subtitle, idx) in section.subTitles" :key="idx">
              {{ subtitle }}
            </p>
          </div>
        </template>
        <template #textRegular>
          <p v-for="(text, idx) in section.texts" :key="idx">
            {{ text }}
          </p>
        </template>
      </ProjectSubSection>
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
        <!-- <img class="case-summary__image" :src="`/img/musearch/${image.url}`" :alt="image.alt" /> -->
        <img
          v-for="(img, id) in images"
          :key="id"
          class="case-summary__image"
          :src="`/img/musearch/${img.url}`"
          :alt="img.alt"
        />
      </div>
    </ProjectSection>
  </div>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/musearch';
const { title, statistic, lightSections, darkSections, processHighlights, images } = content.caseSummary;
</script>

<style lang="scss" scoped>
.case-summary {
  @include flex(column, center, center, 0);

  &__title {
    @include section-title;
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
}

.text-regular-mt {
  margin-top: 2.4rem;

  @include desktop {
    margin-top: 4.8rem;
  }
}
</style>
