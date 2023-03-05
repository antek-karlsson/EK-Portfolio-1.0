<template>
  <div class="discovery-ideation">
    <ProjectSection>
      <h3 class="discovery-ideation__title">{{ title }}</h3>
      <div v-for="(section, sectionId) in subSections" :key="sectionId" class="discovery-ideation__section-wrapper">
        <ProjectSubSection :title="section.title">
          <template #textRegular>
            <p v-for="(text, textId) in section.texts" :key="textId">{{ text }}</p>
          </template>
        </ProjectSubSection>
        <div v-if="section.competitors" class="discovery-ideation__competitors">
          <div
            v-for="(competitor, competitorId) in section.competitors"
            :key="competitorId"
            class="discovery-ideation__competitor"
          >
            <h6 class="discovery-ideation__competitor-name">{{ competitor.name }}</h6>
            <ul class="discovery-ideation__competitor-list">
              <p class="discovery-ideation__competitor-list-title">{{ competitor.strengths.title }}</p>
              <li
                v-for="(strength, strengthId) in competitor.strengths.items"
                :key="strengthId"
                class="discovery-ideation__competitor-list-item"
              >
                {{ strength }}
              </li>
            </ul>
            <ul class="discovery-ideation__competitor-list">
              <p class="discovery-ideation__competitor-list-title">{{ competitor.weaknesses.title }}</p>
              <li
                v-for="(weakness, weaknessId) in competitor.weaknesses.items"
                :key="weaknessId"
                class="discovery-ideation__competitor-list-item"
              >
                {{ weakness }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="section.interviews" class="discovery-ideation__interviews">
          <div class="discovery-ideation__interviews-swiper">
            <ClientOnly>
              <Swiper
                loop
                :modules="modules"
                :slides-per-view="isScreenMobile ? 1 : 2"
                :space-between="50"
                :pagination="{ clickable: true }"
                navigation
                @swiper="setSwiper"
              >
                <SwiperSlide v-for="(interview, interviewId) in section.interviews" :key="interviewId">
                  <InterviewCard :title="interview.person" :questions="interview.interview" />
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>
        </div>
      </div>
    </ProjectSection>
  </div>
</template>

<script setup lang="ts">
import breakpoints from '@/api/data/constants/mediaQueries';
import { content } from '@/api/data/content/projects/musearch';
const { title, subSections } = content.discovery;

const isScreenMobile = useMediaQuery(breakpoints.xs);

const modules = [SwiperA11y, SwiperPagination, SwiperNavigation];
const swiper = ref(null);

function setSwiper(swiperInstance: HTMLElement) {
  swiper.value = swiperInstance;
}
</script>

<style lang="scss" scoped>
.discovery-ideation {
  &__title {
    @include section-title;
  }

  &__competitors {
    @include flex(column, space-between, flex-start, 2.4rem);
    margin-top: 3.2rem;

    @include tablet-landscape {
      @include flex(row, space-between, flex-start, 2.4rem);
    }
  }

  &__competitor {
    max-width: 46.4rem;
    @include flex(column, flex-start, flex-start, 2.4rem);
  }

  &__competitor-name {
    font-family: $lato;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.05em;
    color: $sienna;
  }

  &__competitor-list-title {
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.05em;
    color: $carbon;
  }

  &__competitor-list {
    @include flex(column, flex-start, flex-start, 1.2rem);
  }

  &__competitor-list-item {
    @include section-text-regular;
  }

  &__interviews {
    margin-top: 2.6rem;

    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
      color: $navy;
      top: 2.25rem;
    }

    :deep(.swiper-button-prev) {
      left: -0;
    }

    :deep(.swiper-button-next) {
      right: 0;
    }

    :deep(.swiper-pagination) {
      top: 0;
      height: 0.1rem;
      margin: 0 auto;
    }

    :deep(.swiper-pagination-bullet) {
      width: 1.4rem;
      height: 1.4rem;
    }

    :deep(.swiper-pagination-bullet-active) {
      background: $navy;
    }
  }
}
</style>
