<template>
  <div class="projects">
    <h1 class="projects__heading">projects</h1>
    <div>
      <ProjectTeaser
        v-for="teaser in teasers"
        :key="teaser.id"
        class="trigger"
        :title="teaser.title"
        :description="teaser.description"
        :link-url="teaser.linkUrl"
        :link-text="teaser.linkText"
        :img-url="teaser.imgUrl"
        :img-alt="teaser.imgAlt"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { teasers } from '@/api/data/content/home/project-teasers';
</script>

<style lang="scss" scoped>
.projects {
  height: 100%;
  max-width: 1290px;
  margin: 0 auto;
  margin-bottom: 18.8rem;

  @include desktop {
    margin-inline: auto;
  }

  &__heading {
    @include home-section-padding;
    font-family: $playfair;
    font-weight: 600;
    font-size: 6.4rem;
    line-height: 1.33;
    letter-spacing: 0.01rem;
    color: $navy;
  }
}
</style>
