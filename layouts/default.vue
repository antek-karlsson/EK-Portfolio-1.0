<template>
  <div>
    <main>
      <Navbar />
      <!-- <NavbarOverlay /> -->
      <slot />
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: 100vh;
  background-color: $white;
}
</style>
