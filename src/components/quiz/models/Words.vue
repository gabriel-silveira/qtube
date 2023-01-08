<template>
  <div>
    <!-- QUESTION -->
    <div
      id="question"
      class="d-flex justify-center align-center"
      :style="questionStyle"
      v-html="quiz.current.question.word"
    />

    <!-- OPTIONS -->
    <div id="options" class="text-center">
      <div
        v-for="(option, index) of quiz.current.options"
        :key="`option-${index}`"
        :id="option"
        class="d-inline-block text-center rounded-lg one-word"
        v-html="option"
      />
    </div>

    <!-- TIMER -->
    <div id="progress">
      <div id="time-bar" />
    </div>

    <Conclusion />
  </div>
</template>

<script setup lang="ts">
import {computed, inject, onMounted} from "vue";

import Conclusion from '@/components/quiz/conclusion/Index.vue';

// services
import {getTextColor} from "@/services/Color";
import Quiz from "@/services/quiz";

const quiz = inject('quiz') as Quiz;

const questionStyle = computed(() => ({
  fontSize: `${quiz.current.question.size}px`,
  backgroundColor: quiz.current.question.backgroundColor,
  color: getTextColor(quiz.current.question.backgroundColor)
}));

onMounted(() => {
  quiz.play();
});
</script>
