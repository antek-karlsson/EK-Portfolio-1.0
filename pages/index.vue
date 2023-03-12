<template>
  <div class="home-page">
    <Hero />
    <div id="teasers">
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
.home-page {
  height: 100%;
  max-width: 1290px;
  margin: 0 auto;
  margin-bottom: 18.8rem;
  @include desktop {
    margin-inline: auto;
  }
}
</style>
