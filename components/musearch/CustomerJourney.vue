<template>
  <ClientOnly>
    <div class="customer-journey">
      <ProjectSection>
        <ProjectSubSection :title="title">
          <template #textRegular>
            <p>{{ text }}</p>
          </template>
        </ProjectSubSection>
        <div v-if="isScreenTablet" class="customer-journey__personas-mobile">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :pagination="{ clickable: true }"
            navigation
            @swiper="setPersonaSwiper"
            @active-index-change="setPersonaIndex(personaSwiper?.realIndex)"
          >
            <SwiperSlide v-for="(persona, personaId) in personas" :key="personaId">
              <PersonaCard
                :url="persona.image.url"
                :alt="persona.image.alt"
                :name="persona.name"
                :motto="persona.motto"
                :properties="persona.properties"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div v-else class="customer-journey__personas-desktop">
          <PersonaCard
            v-for="(persona, personaId) in personas"
            :key="personaId"
            :url="persona.image.url"
            :alt="persona.image.alt"
            :name="persona.name"
            :motto="persona.motto"
            :properties="persona.properties"
          />
        </div>
      </ProjectSection>
      <ProjectSection>
        <div v-if="isScreenTabletLandscape" class="customer-journey__maps-desktop">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            :pagination="{ clickable: true }"
            navigation
            @swiper="setJourneySwiper"
          >
            <SwiperSlide v-for="(img, imgId) in journeyMaps" :key="imgId">
              <img :src="`/img/musearch/${img.urlBig}`" :alt="img.alt" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div v-else class="customer-journey__maps-mobile">
          <img v-if="personaIndex === 0" :src="`/img/musearch/${journeyMaps[0].urlSmall}`" :alt="journeyMaps[0].alt" />
          <img v-if="personaIndex === 1" :src="`/img/musearch/${journeyMaps[1].urlSmall}`" :alt="journeyMaps[1].alt" />
        </div>
      </ProjectSection>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/musearch';
import breakpoints from '@/api/data/constants/mediaQueries';

const isScreenTablet = useMediaQuery(breakpoints.sm);
const isScreenTabletLandscape = useMediaQuery(breakpoints.md);

const { title, text, personas, journeyMaps } = content.customerJourney;

const modules = [SwiperA11y, SwiperPagination, SwiperNavigation];
const personaSwiper = ref(null);
const journeySwiper = ref(null);

const personaIndex = ref(0);

function setPersonaIndex(index: number) {
  personaIndex.value = index;
}

function setPersonaSwiper(swiperInstance: HTMLElement) {
  personaSwiper.value = swiperInstance;
}

function setJourneySwiper(swiperInstance: HTMLElement) {
  journeySwiper.value = swiperInstance;
}
</script>

<style lang="scss" scoped>
.customer-journey {
  &__personas-mobile {
    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
      color: $navy;
      top: 15rem;
    }

    :deep(.swiper-button-prev::after),
    :deep(.swiper-button-next::after) {
      font-size: 2.4rem;
    }

    :deep(.swiper-button-prev) {
      left: 0;
      @include tablet {
        left: 9rem;
      }
    }

    :deep(.swiper-button-next) {
      right: 0;
      @include tablet {
        right: 9rem;
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

  &__personas-desktop {
    @include flex(row, space-between);
  }

  &__maps-mobile {
    overflow-x: scroll;
    overflow-y: hidden;
  }

  &__maps-desktop {
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
      bottom: 2.5rem;
      height: 0.1rem;
      margin: 0 auto;
    }

    :deep(.swiper-pagination-bullet) {
      width: 1rem;
      height: 1rem;
    }

    :deep(.swiper-pagination-bullet-active) {
      background: $navy;
    }
  }
}
</style>
