<template>
  <div :class="classes">
    <p class="swatch__label">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color:
    | '#1CA5B8'
    | '#9BCCD2'
    | '#DAEBF2'
    | '#DE535C'
    | '#FFA6AB'
    | '#FEECED'
    | '#359FD0'
    | '#7CBCDA'
    | '#D2ECF8'
    | '#9AC7C7'
    | '#B9E3E1'
    | '#E3F3F3';
  label: string;
}

const props = defineProps<Props>();

const classes = computed(() => {
  return [
    'swatch',
    { 'swatch--1CA5B8': props.color === '#1CA5B8' },
    { 'swatch--9BCCD2': props.color === '#9BCCD2' },
    { 'swatch--DAEBF2': props.color === '#DAEBF2' },
    { 'swatch--DE535C': props.color === '#DE535C' },
    { 'swatch--FFA6AB': props.color === '#FFA6AB' },
    { 'swatch--FEECED': props.color === '#FEECED' },
    { 'swatch--359FD0': props.color === '#359FD0' },
    { 'swatch--7CBCDA': props.color === '#7CBCDA' },
    { 'swatch--D2ECF8': props.color === '#D2ECF8' },
    { 'swatch--9AC7C7': props.color === '#9AC7C7' },
    { 'swatch--B9E3E1': props.color === '#B9E3E1' },
    { 'swatch--E3F3F3': props.color === '#E3F3F3' },
  ];
});
</script>

<style lang="scss" scoped>
.swatch {
  width: 9.6rem;
  height: 9.6rem;
  @include flex(column, center, center, 0);
  border-radius: 50%;
  padding: 0.5rem;

  &__label {
    font-family: $lato;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.16;
    letter-spacing: -0.05em;
    color: #4e4e4e;
  }

  &--1CA5B8 {
    background-color: #1ca5b8;
  }
  &--9BCCD2 {
    background-color: #9bccd2;
  }
  &--DAEBF2 {
    background-color: #daebf2;
  }
  &--DE535C {
    background-color: #de535c;
  }
  &--FFA6AB {
    background-color: #ffa6ab;
  }
  &--FEECED {
    background-color: #feeced;
  }
  &--359FD0 {
    background-color: #359fd0;
  }
  &--7CBCDA {
    background-color: #7cbcda;
  }
  &--D2ECF8 {
    background-color: #d2ecf8;
  }
  &--9AC7C7 {
    background-color: #9ac7c7;
  }
  &--B9E3E1 {
    background-color: #b9e3e1;
  }
  &--E3F3F3 {
    background-color: #e3f3f3;
  }
}
</style>
