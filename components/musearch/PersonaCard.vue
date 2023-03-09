<template>
  <div class="persona-card">
    <img class="persona-card__image" :src="`/img/musearch/${url}`" :alt="alt" />
    <h6 class="persona-card__name">{{ name }}</h6>
    <p class="persona-card__motto">{{ motto }}</p>
    <div class="persona-card__properties">
      <p v-for="(property, propertyId) in properties" :key="propertyId" class="persona-card__property">
        <span class="persona-card__property-name">{{ property.name }}</span>
        <span class="persona-card__property-text">{{ property.text }}</span>
      </p>
    </div>
    <button v-if="!forMobile" class="persona-card__button" type="button" @click="$emit('click')">
      View Customer Journey Map
    </button>
  </div>
</template>

<script setup lang="ts">
interface Property {
  name: string;
  text: string;
}

interface Props {
  url: string;
  alt: string;
  name: string;
  motto: string;
  properties: Property[];
  forMobile?: boolean;
}

withDefaults(defineProps<Props>(), {
  forMobile: false,
});

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style lang="scss" scoped>
.persona-card {
  @include flex(column, flex-start, center, 2.4rem);
  max-width: 34.8rem;
  width: 100%;
  padding-top: 5rem;
  margin: 0 auto;

  &__name {
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25;
    text-align: center;
    letter-spacing: -0.05em;
    text-indent: 12px;
    color: black;
  }

  &__motto {
    font-family: $playfair;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.25;
    text-align: center;
    letter-spacing: -0.05em;
    text-indent: 12px;
    color: black;
  }

  &__properties {
    @include flex(column, flex-start, flex-start, 1.2rem);
  }

  &__property-name,
  &__property-text {
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.3;
    letter-spacing: -0.03em;
    color: $carbon;
  }

  &__property-text {
    font-weight: 300;
    margin-left: 0.5rem;
  }

  &__button {
    @include base-button;
  }
}
</style>
