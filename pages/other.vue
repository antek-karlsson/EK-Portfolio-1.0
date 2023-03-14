<template>
  <div class="other">
    <div v-for="(item, itemId) in content" :key="itemId" class="other__img-container">
      <button class="other__img-button" @click="setCurrentImg(item.urlBig, item.alt)">
        <img :src="`/img/other/${item.urlSmall}`" :alt="item.alt" class="other__img" />
        <div class="other__img-overlay">
          <IconCarbon:fitToScreen class="other__img-overlay-icon" />
        </div>
      </button>
    </div>
    <ImageModal
      v-if="isModalOpen"
      :url="`/img/other/${currentImg.url}`"
      :alt="currentImg.alt"
      @close-modal="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { content } from '@/api/data/content/other-work';

const isModalOpen = ref(false);
const currentImg = ref({ url: '', alt: '' });

function setCurrentImg(url: string, alt: string) {
  currentImg.value.url = url;
  currentImg.value.alt = alt;
  openModal();
}

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<style lang="scss" scoped>
.other {
  @include flex(column, space-between, center, 2.4rem);
  width: 100%;
  padding: 6.4rem 2.4rem;
  flex-wrap: wrap;
  min-height: 60rem;
  height: 100%;

  @include tablet {
    padding: 6.4rem 3.2rem;
  }

  @include tablet-landscape {
    padding: 6.4rem 6.4rem;
  }

  @include desktop {
    padding: 6.4rem 12.8rem;
  }

  @include tablet-landscape {
    @include flex(row, center, center, 4.8rem);
  }

  &__img-container {
    position: relative;
    height: auto;

    @include tablet-landscape {
      &:hover .other__img-overlay,
      &:active .other__img-overlay,
      &:focus .other__img-overlay,
      &:focus-visible .other__img-overlay,
      &:focus-within .other__img-overlay {
        opacity: 0.5;
        transform: scale(1.1) translateX(0.5rem) translateY(0.5rem);
        cursor: pointer;
      }

      &:hover .other__img,
      &:active .other__img,
      &:focus .other__img,
      &:focus-visible .other__img,
      &:focus-within .other__img {
        transform: scale(1.1) translateX(0.5rem) translateY(0.5rem);
        cursor: pointer;
      }
    }
  }

  &__img-button {
    all: unset;
    width: 100%;
  }

  &__img {
    width: 100%;
    border-radius: 0.4rem;
    box-shadow: 0 0.4rem 0.2rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
  }

  &__img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    border-radius: 0.4rem;
    opacity: 0;
    transition: all 0.3s ease-out;
    @include flex();
  }

  &__img-overlay-icon {
    color: $white;
    font-size: 10rem;
  }
}
</style>
