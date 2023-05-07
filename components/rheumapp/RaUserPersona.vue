<template>
  <ClientOnly>
    <div class="user-persona">
      <ProjectSection>
        <h4 class="user-persona__step">{{ step }}</h4>
        <ProjectSubSection :title="title">
          <template #textRegular>
            <p>{{ text }}</p>
          </template>
        </ProjectSubSection>
        <div class="user-persona__showcase">
          <img
            class="user-persona__showcase-img"
            :src="`/img/rheumapp/${persona.image.url}`"
            :alt="persona.image.alt"
          />
          <div class="user-persona__showcase-content">
            <h5 class="user-persona__showcase-name">{{ persona.name }}</h5>
            <div class="user-persona__showcase-content-text">
              <h6 class="user-persona__showcase-title">{{ persona.title }}</h6>
              <p class="user-persona__showcase-story">{{ persona.story }}</p>
            </div>
          </div>
        </div>
        <div class="user-persona__properties">
          <div v-for="(list, id) in persona.properties" :key="id" class="user-persona__properties-list">
            <h6 class="user-persona__properties-title">{{ list.title }}</h6>
            <ul>
              <li v-for="(item, idx) in list.items" :key="idx" class="user-persona__properties-item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="user-persona__empathy-map">
          <ProjectSubSection :title="empathyMap.title" />
          <div v-if="isTabletLandscape" class="user-persona__empathy-map-table">
            <div v-for="(section, id) in empathyMap.sections" :key="id" class="user-persona__empathy-map-section">
              <p class="user-persona__empathy-map-title">{{ section.title }}</p>
              <ul class="user-persona__empathy-map-list">
                <li v-for="(item, idx) in section.list" :key="idx" class="user-persona__empathy-map-item">
                  {{ item }}
                </li>
              </ul>
            </div>
            <img
              class="user-persona__empathy-map-img"
              :src="`/img/rheumapp/${empathyMap.image.url}`"
              :alt="empathyMap.image.alt"
            />
          </div>
          <div v-else class="user-persona__empathy-map-swiper">
            <div class="user-persona__empathy-map-swiper-container">
              <Swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="50"
                :pagination="{ clickable: true }"
                navigation
                @swiper="setSwiper"
              >
                <SwiperSlide v-for="(section, id) in empathyMap.sections" :key="id">
                  <div class="ser-persona__empathy-map-section">
                    <p class="user-persona__empathy-map-title">{{ section.title }}</p>
                    <ul class="user-persona__empathy-map-list">
                      <li v-for="(item, idx) in section.list" :key="idx" class="user-persona__empathy-map-item">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              </Swiper>
              <img
                class="user-persona__empathy-map-img"
                :src="`/img/rheumapp/${empathyMap.image.url}`"
                :alt="empathyMap.image.url"
              />
            </div>
          </div>
        </div>
      </ProjectSection>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/rheumapp';
import breakpoints from '@/api/data/constants/mediaQueries';

const { step, title, text, persona, empathyMap } = content.userPersona;

const isTabletLandscape = useMediaQuery(breakpoints.md);

const modules = [SwiperA11y, SwiperPagination, SwiperNavigation];
const swiper = ref(null);

function setSwiper(swiperInstance: HTMLElement) {
  swiper.value = swiperInstance;
}
</script>

<style lang="scss" scoped>
.user-persona {
  &__step {
    @include step($teal);
  }

  &__showcase {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;

    @include tablet-landscape {
      flex-direction: row;
    }
  }

  &__showcase-img {
    max-width: 21.4rem;
    width: 100%;
  }

  &__showcase-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.4rem;
  }

  &__showcase-content-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.6rem;
  }

  &__showcase-name {
    font-family: $lato;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.4;
    letter-spacing: -0.03em;
    color: $ra-black;
  }

  &__showcase-title {
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: -0.03em;
    color: $ra-black;
  }

  &__showcase-story {
    font-family: $lato;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: -0.03em;
    color: $ra-black;
  }

  &__properties {
    display: flex;
    flex-direction: column;
    gap: 5.6rem;

    @include tablet-landscape {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2.4rem;
    }
  }

  &__properties-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.4rem;

    @include tablet-landscape {
      max-width: 50%;
    }

    ul {
      list-style-type: disc;
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }

  &__properties-title {
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: -0.03em;
    color: $ra-black;
  }

  &__properties-item {
    margin-inline-start: 2.2rem;
    font-family: $lato;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: -0.03em;
    color: $ra-black;
  }

  &__empathy-map {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3.2rem;
  }

  &__empathy-map-table {
    position: relative;

    @include tablet-landscape {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  &__empathy-map-swiper-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  &__empathy-map-swiper {
    width: 100%;
    :deep(.swiper) {
      padding-block: 2.4rem;
      width: 100%;
    }
    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
      color: $navy;
      top: 1.3rem;
    }

    :deep(.swiper-button-prev::after),
    :deep(.swiper-button-next::after) {
      font-size: 2.4rem;
    }

    :deep(.swiper-button-prev) {
      left: -0;

      @include tablet {
        left: 12rem;
      }
    }

    :deep(.swiper-button-next) {
      right: 0;

      @include tablet {
        right: 12rem;
      }
    }

    :deep(.swiper-pagination) {
      top: 0;
      height: 0.1rem;
      margin: 0 auto;
    }

    :deep(.swiper-pagination-bullet) {
      width: 0.8rem;
      height: 0.8rem;
    }

    :deep(.swiper-pagination-bullet-active) {
      background: $navy;
    }
  }

  &__empathy-map-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.4rem;
    gap: 2.4rem;
    border: solid $teal;

    @include tablet-landscape {
      width: 50%;
      min-height: 38.7rem;
    }

    @include desktop {
      padding: 3.6rem;
    }

    &:nth-child(1) {
      border-width: 3px 0 0 3px;
    }

    &:nth-child(2) {
      border-width: 3px 3px 0 3px;
    }

    &:nth-child(3) {
      border-width: 3px 0 3px 3px;
    }

    &:nth-child(3) {
      border-width: 3px 0 3px 3px;
    }
  }

  &__empathy-map-title {
    font-family: $lato;
    font-weight: 500;
    font-size: 2.2rem;
    line-height: 1.4;
    text-align: center;
    letter-spacing: -0.03em;
    color: $ra-black;
  }

  &__empathy-map-list {
    max-width: 38.4rem;
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin: 0 auto;
  }

  &__empathy-map-item {
    margin-inline-start: 2.2rem;
    font-family: $lato;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.4;
    letter-spacing: -0.03em;
    color: $ra-black;
  }

  &__empathy-map-img {
    max-width: 25rem;
    @include tablet-landscape {
      z-index: 100;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
</style>
