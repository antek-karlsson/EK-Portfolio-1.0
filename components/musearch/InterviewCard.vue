<template>
  <div class="interview-card">
    <h6 class="interview-card__title">{{ title }}</h6>
    <div class="interview-card__interview">
      <div v-for="(item, itemId) in questions" :key="itemId" class="interview-card__interview-item">
        <p class="interview-card__interview-question">{{ item.question }}</p>
        <p class="interview-card__interview-answer">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Question = {
  question: string;
  answer: string;
};

interface Props {
  title: string;
  questions: Question[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.interview-card {
  @include flex(column, flex-start, flex-start, 2.4rem);
  max-width: 55.2rem;
  width: 100%;
  padding: 5rem 0;

  &__title {
    align-self: center;
    font-family: $lato;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 1.25;
    letter-spacing: -0.05em;
    color: $carbon;
  }

  &__interview {
    @include flex(column, flex-start, flex-start, 1.2rem);
  }

  &__interview-question {
    font-family: $lato;
    font-weight: 400;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: -0.05em;
    color: $carbon;
  }

  &__interview-answer {
    margin-top: 0.5rem;
    font-family: $lato;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.4;
    letter-spacing: -0.05em;
    color: $carbon;
  }
}
</style>
