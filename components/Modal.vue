<template>
  <Teleport to="#modal-target">
    <div class="base-modal">
      <div class="base-modal__mask" @click.self="$emit('close-modal')">
        <div class="base-modal__content">
          <IconButton class="icon-close" type="close" light @click="$emit('close-modal')" />
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'close-modal'): void;
}>();
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
  &__mask {
    background-color: rgba($black, 0.8);
    @include flex(row, center, center, 0);
    width: 100vw;
    height: 100vh;
  }
  &__content {
    @include flex(row, center, flex-start, 0);
    overflow-y: auto;
    max-height: 90%;
    position: relative;
    background-color: $carbon;
    border-radius: 1.2rem;
  }
}
.icon-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  color: $carbon;
  &:hover {
    color: $navy;
  }
}
</style>
