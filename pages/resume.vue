<template>
  <div class="resume">
    <!-- TODO: Replace below with new resume file once available -->
    <!-- <embed src="/img/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="100%" /> -->
    <h1 class="resume__placeholder">Coming soon!</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.resume {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &__placeholder {
    padding-block-start: 20rem;
    color: $black;
    font-family: $playfair;
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 1.33;
    letter-spacing: 0.01em;

    @include desktop {
      font-size: 6.4rem;
    }
  }
}
</style>
