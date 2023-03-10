<template>
  <ProjectSection>
    <div class="prototyping">
      <h3 class="prototyping__title">{{ title }}</h3>
      <ProjectSubSection>
        <template #textRegular>
          <p v-for="(text, textId) in texts" :key="textId" class="prototyping__text">{{ text }}</p>
        </template>
      </ProjectSubSection>
      <div v-for="(section, sectionId) in subSections" :key="sectionId" class="prototyping__section">
        <div class="prototyping__section-card">
          <h6 class="prototyping__section-title">{{ section.title }}</h6>
          <div class="prototyping__section-texts">
            <p v-for="(text, textId) in section.texts" :key="textId" class="prototyping__section-text">{{ text }}</p>
          </div>
        </div>
        <div v-if="section.images" class="prototyping__section-carousel">
          <ClientOnly>
            <Swiper
              :modules="modules"
              :slides-per-view="1"
              :pagination="{ clickable: true }"
              navigation
              @swiper="setSwiper"
            >
              <SwiperSlide v-for="(img, imgId) in section.images" :key="imgId">
                <img :src="`/img/musearch/${isScreenTablet ? img.urlSmall : img.urlBig}`" :alt="img.alt" />
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
        <div v-if="section.image" class="prototyping__section-image">
          <img
            :src="`/img/musearch/${isScreenTablet ? section.image.urlSmall : section.image.urlBig}`"
            :alt="section.image?.alt"
          />
        </div>
      </div>
    </div>
  </ProjectSection>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/musearch';
import breakpoints from '@/api/data/constants/mediaQueries';
const { title, texts, subSections } = content.prototyping;

const isScreenTablet = useMediaQuery(breakpoints.sm);

const modules = [SwiperA11y, SwiperPagination, SwiperNavigation];
const swiper = ref(null);

function setSwiper(swiperInstance: HTMLElement) {
  swiper.value = swiperInstance;
}
</script>

<style lang="scss" scoped>
.prototyping {
  @include flex(column, center, flex-start, 4.8rem);

  &__title {
    @include section-title;
  }

  &__section {
    width: 100%;
    @include flex(column, center, flex-start, 4.8rem);

    &-card {
      @include flex(column, center, flex-start, 2.4rem);
    }

    &-title {
      font-family: $lato;
      font-weight: 400;
      font-size: 2rem;
      line-height: 1.25;
      letter-spacing: -0.05em;
      color: $carbon;
    }

    &-texts {
      @include flex(column, center, flex-start, 2.4rem);
    }

    &-text {
      font-family: $lato;
      font-weight: 300;
      font-size: 2rem;
      line-height: 1.25;
      letter-spacing: -0.01em;
      color: $carbon;
    }
  }

  &__section-carousel {
    width: 100%;

    img {
      width: 100%;
    }

    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
      color: $navy;
      top: 50%;
    }

    :deep(.swiper-button-prev::after),
    :deep(.swiper-button-next::after) {
      font-size: 3.2rem;
    }

    :deep(.swiper-button-prev) {
      left: 1.5rem;
    }

    :deep(.swiper-button-next) {
      right: 1.5rem;
    }

    :deep(.swiper-pagination) {
      bottom: 2rem;
      height: 0.1rem;
      margin: 0 auto;

      @include desktop {
        bottom: 2.1rem;
      }

      @include desktop-lg {
        bottom: 2.1rem;
      }

      @include desktop-xl {
        bottom: 2.3rem;
      }

      @include desktop-2xl {
        bottom: 2.4rem;
      }
    }

    :deep(.swiper-pagination-bullet) {
      width: 1rem;
      height: 1rem;
    }

    :deep(.swiper-pagination-bullet-active) {
      background: $navy;
    }
  }

  &__section-image {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    @include tablet-landscape {
      overflow-x: hidden;
      overflow-y: hidden;

      img {
        width: 100%;
      }
    }
  }
}
</style>
