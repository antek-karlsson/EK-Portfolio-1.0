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
  project?: 'musearch' | 'rheumapp';
}

const props = withDefaults(defineProps<Props>(), {
  isDark: false,
  double: false,
  project: 'musearch',
});

const bgColorDark = computed(() => {
  if (props.project === 'musearch') {
    return '#A03F45';
  }

  if (props.project === 'rheumapp') {
    return '#007484';
  }

  return '#A03F45';
});
</script>

<style lang="scss" scoped>
.project-section {
  @include section-padding;

  &--dark {
    background-color: v-bind(bgColorDark);
  }

  &__content {
    @include flex(column, center, space-between, 6.4rem);
    max-width: 144rem;
    margin: 0 auto;

    &--row {
      @include flex(column, center, center, 5rem);

      @include tablet-landscape {
        @include flex(row, space-between, flex-start, 5rem);
      }
    }
  }
}
</style>
