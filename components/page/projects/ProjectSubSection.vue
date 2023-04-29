<template>
  <div class="sub-section" :class="{ 'sub-section--dark': isDark }">
    <h4 v-if="title !== ''" class="sub-section__title" :class="{ 'sub-section__title--dark': isDark }">{{ title }}</h4>
    <div v-if="$slots.textRegularFirst" class="sub-section__regular" :class="{ 'sub-section__regular--dark': isDark }">
      <slot name="textRegularFirst" />
    </div>
    <div v-if="$slots.textBold" class="sub-section__bold" :class="{ 'sub-section__bold--dark': isDark }">
      <slot name="textBold" />
    </div>
    <div v-if="$slots.textRegular" class="sub-section__regular" :class="{ 'sub-section__regular--dark': isDark }">
      <slot name="textRegular" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isDark?: boolean;
  title?: string;
}

withDefaults(defineProps<Props>(), {
  isDark: false,
  title: '',
});
</script>

<style lang="scss" scoped>
.sub-section {
  @include flex(column, center, flex-start, 2.4rem);
  &__title {
    @include section-subtitle;

    &--dark {
      @include section-subtitle('dark');
    }
  }

  &__bold {
    @include flex(column, center, flex-start, 2.4rem);
    @include section-text-bold;

    &--dark {
      @include section-text-bold('dark');
    }
  }

  &__regular {
    @include flex(column, center, flex-start, 2.4rem);
    @include section-text-regular;

    &--dark {
      @include section-text-regular('dark');
    }
  }
}
</style>
