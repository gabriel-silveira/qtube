<template>
  <div>
    <div
      id="question"
      class="d-flex justify-center align-center"
      :style="questionStyle"
    >
      {{ currentQuestion.question.value }}
    </div>

    <div id="options">
      <div
        v-for="(option, index) of currentQuestion.options"
        :key="`option-${index}`"
        :id="option"
        class="d-inline-block text-center rounded-lg one-word"
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
import {computed, inject, onMounted} from "vue";
import {getTextColor} from "@/services/Color";
import Quiz from "@/services/quiz";

const quiz = inject('quiz') as Quiz;

const currentQuestion = computed(() => quiz.current);

const questionStyle = computed(() => ({
  fontSize: `${currentQuestion.value.question.size}px`,
  backgroundColor: currentQuestion.value.question.backgroundColor,
  color: getTextColor(currentQuestion.value.question.backgroundColor)
}));

onMounted(() => {
  quiz.play();
});
</script>
