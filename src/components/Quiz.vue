<template>
  <div
    id="quiz"
    :style="quizStyle"
  >
    <div
      id="question"
      class="d-flex justify-center align-center"
      :style="{
        fontSize: `${quiz.activeItem.question.size}px`,
        backgroundColor: quiz.activeItem.question.backgroundColor,
        color: getTextColor(quiz.activeItem.question.backgroundColor)
      }"
    >
      {{ quiz.activeItem.question.value }}
    </div>

    <div id="options">
      <div
        v-for="(option, index) of quiz.activeItem.options"
        :key="`option-${index}`"
        class="mx-10 mt-7 text-center rounded-lg"
      >
        {{ option }}
      </div>
    </div>

    <div id="progress">
      <div id="bar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Quiz from "@/services/quiz";
import { getTextColor } from "@/services/Color";

const quiz = new Quiz([{
  fontFamily: 'Sniglet',
  backgroundColor: '#BBCCEE',
  question: {
    value: 'CINZA',
    size: 105,
    backgroundColor: '#666666',
  },
  options: ['ORANGE', 'RED', 'GREY'],
  answer: 2,
}]);

const quizStyle = computed(() => ({
  fontFamily: quiz.activeItem.fontFamily,
  backgroundColor: quiz.activeItem.backgroundColor,
}));
</script>

<style>
@import "@/assets/css/fonts.css";
@import "@/assets/css/quiz.css";
</style>
