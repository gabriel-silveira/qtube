<template>
  <div>
    <div
      id="question"
      class="d-flex justify-center align-center"
      :style="{
        fontSize: `${currentQuestion.question.size}px`,
        backgroundColor: currentQuestion.question.backgroundColor,
        color: getTextColor(currentQuestion.question.backgroundColor)
      }"
    >
      {{ currentQuestion.question.value }}
    </div>

    <div id="options">
      <div
        v-for="(option, index) of currentQuestion.options"
        :key="`option-${index}`"
        class="mx-10 mt-7 text-center rounded-lg"
        :class="index === currentQuestion.answer ? 'answer' : ''"
      >
        {{ option }}
      </div>
    </div>

    <div id="progress">
      <div id="time-bar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {getTextColor} from "@/services/Color";
import {computed, inject, onMounted} from "vue";
import Quiz from "@/services/quiz";

const quiz = inject('quiz') as Quiz;

const currentQuestion = computed(() => quiz.activeItem);

onMounted(() => {
  quiz.play();
});
</script>
