<template>
  <div class="footer">
    <h4 class="footer__heading">Let's connect!</h4>
    <a class="footer__link" href="mailto: ek.ewelinakarlsson@gmail.com">ek.ewelinakarlsson@gmail.com</a>
    <div class="footer__icons">
      <a href="https://www.behance.net/ewelinakarlsson" target="_blank">
        <BehanceIcon class="footer__icon" />
      </a>
      <a href="https://www.linkedin.com/in/ewelinakarlsson/" target="_blank">
        <LinkedinIcon class="footer__icon" />
      </a>
    </div>
    <div class="footer__copyright">
      <p class="footer__copyright-main"><span>&copy;</span> 2023 Ewelina Karlsson</p>
      <p class="footer__copyright-sub">designed by Ewelina Karlsson</p>
      <p class="footer__copyright-sub">
        built by <a href="https://github.com/Hjalmar-K-sson" target="_blank">Antoni Karlsson</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BehanceIcon from '@/assets/icons/behance-icon.svg?component';
import LinkedinIcon from '@/assets/icons/linkedin-icon.svg?component';
</script>

<style lang="scss" scoped>
.footer {
  @include flex($direction: column, $justify: center, $align: center, $gap: 3.2rem);
  width: 100%;
  padding: 2.5rem;
  background-color: $navy;
  color: $rosy-brown;

  @include tablet-landscape {
    padding-block: 3.2rem;
  }

  @include desktop {
    padding-block: 4.8rem;
  }

  &__heading {
    font-family: $playfair;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.33;

    @include tablet-landscape {
      font-size: 3.2rem;
    }
  }

  &__link {
    font-family: $lato;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.33;
    text-decoration: none;
    color: inherit;

    @include tablet-landscape {
      font-size: 2.4rem;
    }
  }

  &__icons {
    @include flex($direction: row, $justify: center, $align: flex-start, $gap: 3.2rem);
  }

  &__icon {
    transition: all 0.3s ease-out;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.5);
      }
    }
  }

  &__copyright {
    @include tablet-landscape {
      align-self: flex-start;
    }
  }

  &__copyright-main {
    font-family: $lato;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.33;
    letter-spacing: 0.01em;
  }

  &__copyright-sub {
    font-family: $lato;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.33;
    letter-spacing: 0.01em;

    a {
      display: inline-block;
      background-color: $rosy-brown;
      padding-inline: 0.5rem;
      text-decoration: none;
      color: $navy;
      font-weight: 600;
      transition: all 0.3s ease-out;

      @media (hover: hover) {
        &:hover {
          transform: scale(1.5);
          transform-origin: top left;
        }
      }
    }
  }
}
</style>
