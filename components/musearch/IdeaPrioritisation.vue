<template>
  <ProjectSection is-dark>
    <div class="idea-prioritisation">
      <h3 class="idea-prioritisation__title">{{ title }}</h3>
      <ProjectSubSection is-dark>
        <template #textRegular>
          <p>{{ text }}</p>
        </template>
      </ProjectSubSection>
      <div class="idea-prioritisation__ideas">
        <div v-for="(idea, ideaId) in ideas" :key="ideaId" class="idea-prioritisation__ideas-card">
          <h6 class="idea-prioritisation__ideas-card-title">{{ idea.title }}</h6>
          <ul class="idea-prioritisation__ideas-card-list">
            <li v-for="(item, itemId) in idea.items" :key="itemId" class="idea-prioritisation__ideas-card-text">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </ProjectSection>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/projects/musearch';
const { title, text, ideas } = content.ideaPrioritisation;
</script>

<style lang="scss" scoped>
.idea-prioritisation {
  @include flex(column, center, center, 4.8rem);

  @include tablet-landscape {
    @include flex(column, space-between, center, 4.8rem);
  }

  &__title {
    @include section-title('dark');
  }

  &__ideas {
    @include flex(column, flex-start, center, 4.8rem);

    @include tablet-landscape {
      @include flex(row, space-between, flex-start, 3.2rem);
    }
  }

  &__ideas-card {
    @include flex(column, flex-start, center, 3.2rem);
    max-width: 39.5rem;

    @include tablet-landscape {
      max-width: 28.8rem;
      @include flex(column, center, center, 3.2rem);
    }
  }

  &__ideas-card-list {
    @include flex(column, space-between, flex-start, 1.2rem);
    max-width: 100%;
  }

  &__ideas-card-title {
    text-align: center;
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.05em;
    color: $white-smoke;

    @include tablet-landscape {
      max-width: 26rem;
    }
  }

  &__ideas-card-text {
    list-style-type: disc;
    margin-left: 1em;
    font-family: $lato;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: $white-smoke;
  }
}
</style>
