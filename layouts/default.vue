<template>
  <div>
    <main>
      <!-- Temporarily disable navigation -->
      <!-- <Navbar /> -->
      <slot />
      <div id="modal-target"></div>
      <Footer />
    </main>
  </div>
</template>

<style lang="scss" scoped>
// Temporarily remove top margin
main {
  max-width: 100vw;
  background-color: $white;
  // margin-block-start: 18.2rem;

  @include tablet {
    // margin-block-start: 24.7rem;
  }

  @include tablet-landscape {
    // margin-block-start: 19.7rem;
  }
}
</style>
