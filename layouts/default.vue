<template>
  <div>
    <main>
      <Navbar />
      <slot />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
main {
  background-color: $white;
  margin-block-start: 18.2rem;

  @include tablet {
    margin-block-start: 24.7rem;
  }

  @include tablet-landscape {
    margin-block-start: 19.7rem;
  }
}
</style>
