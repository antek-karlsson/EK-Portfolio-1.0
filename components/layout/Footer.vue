<template>
  <div class="footer">
    <h4 class="footer__heading">Let's connect!</h4>
    <a class="footer__link" href="mailto: ek.ewelinakarlsson@gmail.com">ek.ewelinakarlsson@gmail.com</a>
    <div class="footer__icons">
      <a href="https://www.behance.net/ewelinakarlsson" target="_blank">
        <BehanceIcon />
      </a>
      <a href="https://www.linkedin.com/in/ewelinakarlsson/" target="_blank">
        <LinkedinIcon />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import BehanceIcon from '@/assets/icons/behance-icon.svg?component';
import LinkedinIcon from '@/assets/icons/linkedin-icon.svg?component';
</script>

<style lang="scss" scoped>
.footer {
  @include flex($direction: column, $justify: center, $align: center, $gap: 1rem);
  padding: 4.8rem 15rem;
  background-color: $navy;
  color: $rosy-brown;

  &__heading {
    font-family: $playfair;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 1.33;
  }

  &__link {
    font-family: $lato;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 1.33;
    text-decoration: none;
    color: inherit;
  }

  &__icons {
    @include flex($direction: row, $justify: center, $align: flex-start, $gap: 1.5rem);
  }
}
</style>
