<template>
  <div id="final-design" class="final-designs">
    <ProjectSection is-dark>
      <h3 class="final-designs__title">{{ title }}</h3>
      <div v-for="(section, sectionId) in subSections" :key="sectionId" class="final-designs__section">
        <div v-if="section.subSections" class="final-designs__section-double">
          <div v-for="(sub, subId) in section.subSections" :key="subId" class="final-designs__section-double-sub">
            <ProjectSubSection :title="subId === 0 ? section.title : ''" is-dark>
              <template v-if="sub.text" #textRegular>
                <p>{{ sub.text }}</p>
              </template>
            </ProjectSubSection>
            <div class="final-designs__section-double-sub-images">
              <img
                v-for="(subImg, subImgId) in sub.images"
                :key="subImgId"
                :src="`/img/musearch/${subImg.url}`"
                :alt="subImg.alt"
              />
            </div>
          </div>
        </div>
        <div v-else class="final-designs__section">
          <ProjectSubSection :title="section.title" is-dark>
            <template #textRegular>
              <p>{{ section.text }}</p>
            </template>
          </ProjectSubSection>
          <div class="final-designs__section-images">
            <img v-for="(img, imgId) in section.images" :key="imgId" :src="`/img/musearch/${img.url}`" :alt="img.alt" />
          </div>
        </div>
      </div>
    </ProjectSection>
    <ProjectSection>
      <button class="final-designs__button" @click="scrollTop">Back to top</button>
    </ProjectSection>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { content } from '@/api/data/content/projects/musearch';
const { title, subSections } = content.finalDesigns;

if (process.client) {
  gsap.registerPlugin(ScrollToPlugin);
}

function scrollTop() {
  gsap.to(window, { duration: 0.01, scrollTo: { y: 'body', offsetY: 0 } });
}
</script>

<style lang="scss" scoped>
.final-designs {
  &__title {
    @include section-title('dark');
  }

  &__section,
  &__section-double-sub {
    @include flex(column, flex-start, flex-start, 6.8rem);
    width: 100%;
  }

  &__section-double {
    @include flex(column, flex-start, center, 6.8rem);
    max-width: 100%;
  }

  &__section-images,
  &__section-double-sub-images {
    align-self: center;
    @include flex(row, center, flex-start, 1.2rem);
    flex-wrap: wrap;

    @include desktop {
      align-self: center;
      @include flex(row, center, flex-start, 1.6rem);
      flex-wrap: wrap;
    }

    img {
      max-width: 10.1rem;

      @include tablet {
        max-width: 17rem;
      }
      @include desktop {
        max-width: 26.3rem;
      }
    }
  }

  &__button {
    @include base-button;
  }

  :deep(.project-section) {
    padding-inline: 1.2rem;

    @include tablet {
      padding: 6.4rem 3.2rem;
    }

    @include tablet-landscape {
      padding: 6.4rem 6.4rem;
    }

    @include desktop {
      padding: 6.4rem 12.8rem;
    }

    @include desktop-lg {
      padding: 6.4rem 17rem;
    }

    @include desktop-xl {
      padding: 6.4rem 38.4rem;
    }

    @include desktop-2xl {
      padding: 6.4rem 76.8rem;
    }
  }

  :deep(.sub-section) {
    align-self: flex-start;
  }
}
</style>
