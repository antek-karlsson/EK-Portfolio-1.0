<template>
  <Modal @close-modal="$emit('close-modal')">
    <template #content>
      <div class="image-modal">
        <img :src="url" :alt="alt" />
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
interface Props {
  url: string;
  alt: string;
}

defineProps<Props>();

defineEmits<{
  (e: 'close-modal'): void;
}>();
</script>

<style lang="scss" scoped>
.image-modal {
  max-width: 100rem;
  overflow-y: auto;

  @include tablet-landscape {
    padding: 4.8rem;
  }

  img {
    width: 100%;
    border-radius: 0.4rem;
  }
}
</style>
