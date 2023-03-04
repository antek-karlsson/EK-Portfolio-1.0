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
}
</style>
