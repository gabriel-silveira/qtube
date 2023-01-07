<template>
  <div id="quiz">
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
      >
        {{ option }}
      </div>
    </div>

    <div id="progress" />
  </div>
</template>

<script setup lang="ts">
import Quiz from "@/services/Quiz";
import { getTextColor } from "@/services/Color";

const quiz = new Quiz([{
  question: {
    value: 'CINZA',
    size: 100,
    backgroundColor: '#666666',
  },
  options: ['orange', 'red', 'grey'],
  answer: 0,
}]);
</script>

<style>
@import "@/assets/css/quiz.css";
</style>
