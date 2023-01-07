<template>
  <div
    id="quiz"
    :style="quizStyle"
  >
    <one-word
      v-if="quiz.current.type === quizModels.ONE_WORD"
    />
  </div>
</template>

<script setup lang="ts">
import {computed, onBeforeMount, provide} from "vue";
import Quiz from "@/services/quiz";
import OneWord from "@/components/quiz/models/one-word.vue";
import { quizModels } from "@/services/quiz/interfaces";
import colors1 from "@/services/quiz/quizzes/colors-1";

const quiz = new Quiz(colors1);

const quizStyle = computed(() => ({
  fontFamily: quiz.current.fontFamily,
  backgroundColor: quiz.current.backgroundColor,
}));

onBeforeMount(() => {
  provide('quiz', quiz);
});
</script>
