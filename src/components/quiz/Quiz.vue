<template>
  <div
    id="quiz"
    :style="quizStyle"
  >
    <one-word
      :quiz-option="quiz.activeItem"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Quiz from "@/services/quiz";
import OneWord from "@/components/quiz/models/one-word.vue";
import colors1 from "@/services/quiz/quizzes/colors-1";

const quiz = new Quiz(colors1);

const quizStyle = computed(() => ({
  fontFamily: quiz.activeItem.fontFamily,
  backgroundColor: quiz.activeItem.backgroundColor,
}));

console.log(quiz.activeItem);
</script>

<style>
@import "@/assets/css/fonts.css";
@import "@/assets/css/quiz.css";
</style>
