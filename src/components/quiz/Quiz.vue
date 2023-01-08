<template>
  <div
    id="quiz"
    :style="quiz.style"
  >
    <words
      v-if="quiz.current.type === quizModels.WORDS"
    />
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, provide} from "vue";

// services
import Quiz from "@/services/quiz";
import { quizModels } from "@/services/quiz/interfaces";
import colors1 from "@/services/quiz/quizzes/colors1";

// components
import Words from "@/components/quiz/models/Words.vue";

const quiz = new Quiz(colors1);

onBeforeMount(() => {
  provide('quiz', quiz);
});
</script>
