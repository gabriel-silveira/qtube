<template>
  <div id="conclusion">
    <div
      class="top"
      :style="topStyle"
    />

    <div
      class="bottom d-flex justify-center align-center"
      v-html="quiz.current.conclusion.bottom.phrase"
      :style="bottomStyle"
    />
  </div>
</template>

<script setup lang="ts">
import {computed, inject} from "vue";

// services
import Quiz from "@/services/quiz";

const quiz = inject('quiz') as Quiz;

const topStyle = computed(() => ({
  height: `${quiz.current.conclusion.image.height}%`,
  backgroundImage: `url(${quiz.current.conclusion.image.src}`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const bottomStyle = computed(() => ({
  height: `${100 - quiz.current.conclusion.image.height}%`,
  backgroundColor: quiz.current.conclusion.bottom.backgroundColor,
  color: quiz.current.conclusion.bottom.color,
}));
</script>
