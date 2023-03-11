<template>
  <div :class="classes">
    <p class="swatch__label">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color:
    | '#A03F45'
    | '#B5777B'
    | '#EBEBEB'
    | '#AAA993'
    | '#D2D2C1'
    | '#E5E5D9'
    | '#D7C7C1'
    | '#F2E3DD'
    | '#FFF4EF'
    | '#9B6670'
    | '#D3A9B1'
    | '#E4D5D8'
    | '#90A3B4'
    | '#C8D5E1'
    | '#ECF3F9';
  label: string;
}

const props = defineProps<Props>();

const classes = computed(() => {
  return [
    'swatch',
    { 'swatch--primary': props.color === '#A03F45' || props.color === '#B5777B' || props.color === '#EBEBEB' },
    { 'swatch--A03F45': props.color === '#A03F45' },
    { 'swatch--B5777B': props.color === '#B5777B' },
    { 'swatch--EBEBEB': props.color === '#EBEBEB' },
    { 'swatch--AAA993': props.color === '#AAA993' },
    { 'swatch--D2D2C1': props.color === '#D2D2C1' },
    { 'swatch--E5E5D9': props.color === '#E5E5D9' },
    { 'swatch--D7C7C1': props.color === '#D7C7C1' },
    { 'swatch--F2E3DD': props.color === '#F2E3DD' },
    { 'swatch--FFF4EF': props.color === '#FFF4EF' },
    { 'swatch--9B6670': props.color === '#9B6670' },
    { 'swatch--D3A9B1': props.color === '#D3A9B1' },
    { 'swatch--E4D5D8': props.color === '#E4D5D8' },
    { 'swatch--90A3B4': props.color === '#90A3B4' },
    { 'swatch--C8D5E1': props.color === '#C8D5E1' },
    { 'swatch--ECF3F9': props.color === '#ECF3F9' },
  ];
});
</script>

<style lang="scss" scoped>
.swatch {
  width: 12rem;
  height: 6rem;
  @include flex(column, flex-end, flex-end, 0);
  padding: 0.5rem;

  @include tablet-landscape {
    width: 12rem;
    height: 6rem;
  }

  &__label {
    font-family: $lato;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.16;
    letter-spacing: -0.05em;
  }

  &--primary {
    width: 25.5rem;
    height: 6rem;

    @include tablet-landscape {
      width: 12rem;
    }
  }

  &--A03F45 {
    background-color: #a03f45;
    color: #ebebeb;
  }
  &--B5777B {
    background-color: #b5777b;
    color: #ebebeb;
  }
  &--EBEBEB {
    background-color: #ebebeb;
    color: #9f9f9f;
    border: 1px solid rgba(159, 159, 159, 0.35);
  }
  &--AAA993 {
    background-color: #aaa993;
    color: #57595a;
  }
  &--D2D2C1 {
    background-color: #d2d2c1;
    color: #57595a;
  }
  &--E5E5D9 {
    background-color: #e5e5d9;
    color: #57595a;
    border: 1px solid rgba(159, 159, 159, 0.35);
  }
  &--D7C7C1 {
    background-color: #d7c7c1;
    color: #57595a;
  }
  &--F2E3DD {
    background-color: #f2e3dd;
    color: #57595a;
  }
  &--FFF4EF {
    background-color: #fff4ef;
    color: #57595a;
    border: 1px solid rgba(159, 159, 159, 0.35);
  }
  &--9B6670 {
    background-color: #9b6670;
    color: #57595a;
  }
  &--D3A9B1 {
    background-color: #d3a9b1;
    color: #57595a;
  }
  &--E4D5D8 {
    background-color: #e4d5d8;
    color: #57595a;
    border: 1px solid rgba(159, 159, 159, 0.35);
  }
  &--90A3B4 {
    background-color: #90a3b4;
    color: #57595a;
  }
  &--C8D5E1 {
    background-color: #c8d5e1;
    color: #57595a;
  }
  &--ECF3F9 {
    background-color: #ecf3f9;
    color: #57595a;
    border: 1px solid rgba(159, 159, 159, 0.35);
  }
}
</style>
