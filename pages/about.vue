<template>
  <div class="about">
    <div class="about__text">
      <h1 class="about__heading">about me</h1>
      <p class="about__paragraph"><strong>I am a designer with background in e-commerce and marketing.</strong></p>
      <p class="about__paragraph">
        Photography has been my passion for many years and it started my adventure with graphic design. <br />Later, I
        discovered UX and then I knew it was time to pursue my career that reflects my interests.
      </p>
      <h2 class="about__heading about__heading--sub">and more...</h2>
      <p class="about__paragraph">
        <strong>I love</strong> travelling, non-fiction books, The Office, pizza and The Simpsons. <br />I have two cats
        and I’m learning French.
      </p>
      <p class="about__paragraph">
        I collect cat figurines from around the world. <br />I never come back from a trip without a new one!
      </p>
    </div>
    <img class="about__image" src="/img/about/about.png" alt="Ewelina Karlsson" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about {
  margin: 0 auto;
  padding-block: 8.6rem;
  padding-inline: 2.4rem;
  @include flex(column-reverse, flex-start, center);

  @include desktop {
    @include flex(row, center, flex-start, 4.8rem);
  }

  @include desktop-lg {
    max-width: 129rem;
  }

  &__text {
    @include flex(column, flex-start, flex-start, 3.2rem);

    @include desktop {
      max-width: 48rem;
    }

    @include desktop-lg {
      max-width: 54.4rem;
    }
  }

  &__heading {
    font-family: $playfair;
    font-weight: 600;
    font-size: 6.4rem;
    line-height: 1.33;
    letter-spacing: 0.01rem;
    color: $navy;

    &--sub {
      font-size: 3.2rem;
    }
  }

  &__paragraph {
    font-family: $lato;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 0.01rem;
    color: $black;
  }

  &__image {
    max-width: 100%;
  }
}
</style>
