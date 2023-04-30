<template>
  <div class="discovery-ideation">
    <ProjectSection>
      <h3 class="discovery-ideation__title">{{ title }}</h3>
      <h4 class="discovery-ideation__step">{{ step }}</h4>
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
        <div v-if="section.charts" class="discovery-ideation__charts">
          <div v-for="(chart, id) in section.charts" :key="id" class="discovery-ideation__chart">
            <h6 class="discovery-ideation__chart-title">{{ chart.title }}</h6>
            <div class="discovery-ideation__chart-img">
              <img :src="`/img/rheumapp/${chart.image.url}`" :alt="chart.image.alt" />
            </div>
          </div>
        </div>
        <div v-if="section.results" class="discovery-ideation__results">
          <h6 class="discovery-ideation__results-title">{{ section.results.title }}</h6>
          <ul class="discovery-ideation__results-list">
            <li v-for="(item, id) in section.results.items" :key="id" class="discovery-ideation__results-item">
              {{ item }}
            </li>
          </ul>
        </div>
        <div v-if="section.interviews" class="discovery-ideation__interviews">
          <div class="discovery-ideation__interviews-swiper">
            <ClientOnly>
              <Swiper
                :modules="modules"
                :slides-per-view="isScreenMobile ? 1 : 1.5"
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
import { content } from '@/api/data/content/projects/rheumapp';
const { title, subSections, step } = content.discovery;

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

  &__step {
    font-family: $lato;
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: $teal;
  }

  &__competitors {
    @include flex(column, space-between, flex-start, 2.4rem);
    margin-top: 3.2rem;

    @include tablet-landscape {
      @include flex(row, space-between, flex-start, 2.4rem);
    }
  }

  &__competitor {
    max-width: 30rem;
    @include flex(column, flex-start, flex-start, 2.4rem);
  }

  &__competitor-name {
    font-family: $lato;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.05em;
    color: $teal;
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
    min-height: 26.5rem;
  }

  &__competitor-list-item {
    @include section-text-regular;
    list-style: disc;
    margin-inline-start: 2rem;
  }

  &__charts {
    margin-block-start: 6.4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem;

    @include desktop {
      justify-content: space-between;
    }
  }

  &__chart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3.4rem;
    max-width: 43.8rem;
    width: 100%;

    &:nth-last-child(-n + 2) {
      min-width: 100%;

      .discovery-ideation__chart-title {
        position: relative;
        min-width: 100%;
        &::after {
          width: 100%;
          position: absolute;
          left: 0;
          content: 'Swipe right to see all data \2192';
          font-size: 1.6rem;
          opacity: 0.5;

          @include desktop {
            display: none;
          }
        }
      }
      .discovery-ideation__chart-img {
        overflow-x: scroll;
        overflow-y: hidden;

        @include desktop {
          overflow: hidden;
        }

        img {
          @include desktop {
            width: 80%;
          }
        }
      }
    }

    &:nth-last-child(1) {
      .discovery-ideation__chart-title {
        &::after {
          top: 5.2rem;

          @include tablet {
            top: 2.5rem;
          }
        }
      }
    }
    &:nth-last-child(2) {
      .discovery-ideation__chart-title {
        &::after {
          top: 7.7rem;

          @include tablet {
            top: 5rem;
          }

          @include tablet-landscape {
            top: 2.5rem;
          }
        }
      }
    }

    &:not(:nth-last-child(-n + 2)) {
      .discovery-ideation__chart-img {
        img {
          width: 100%;
        }
      }
    }
  }

  &__chart-title {
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.2;
    color: $ra-black;
    max-width: 40.5rem;
  }

  &__chart-img {
    width: 100%;
  }

  &__results {
    margin-block-start: 6.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.6rem;
  }

  &__results-title {
    font-family: $lato;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: $ra-black;

    @include tablet {
      font-size: 2rem;
    }
  }

  &__results-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: disc;
  }

  &__results-item {
    margin-inline-start: 1.5rem;
    font-family: $lato;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: $ra-black;

    @include tablet {
      font-size: 1.8rem;
    }
  }

  &__interviews {
    margin-top: 2.6rem;

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
}
</style>
