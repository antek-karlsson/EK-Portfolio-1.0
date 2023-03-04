<template>
  <div class="project-section" :class="{ 'project-section--dark': isDark }">
    <div class="project-section__content" :class="{ 'project-section__content--row': double }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isDark?: boolean;
  double?: boolean;
}

withDefaults(defineProps<Props>(), {
  isDark: false,
  double: false,
});
</script>

<style lang="scss" scoped>
.project-section {
  width: 100%;
  padding: 6.4rem 2.4rem;

  @include tablet {
    padding: 6.4rem 3.2rem;
  }

  @include tablet-landscape {
    padding: 6.4rem 6.4rem;
  }

  @include desktop {
    padding: 6.4rem 12.8rem;
  }

  @include desktop-lg {
    padding: 6.4rem 25.6rem;
  }

  @include desktop-xl {
    padding: 6.4rem 38.4rem;
  }

  @include desktop-2xl {
    padding: 6.4rem 76.8rem;
  }

  &--dark {
    background-color: $sienna;
  }

  &__content {
    @include flex(column, center, space-between, 6.4rem);
    max-width: 144rem;

    &--row {
      @include flex(column, center, center, 5rem);

      @include tablet-landscape {
        @include flex(row, space-between, flex-start, 5rem);
      }
    }
  }
}
</style>
