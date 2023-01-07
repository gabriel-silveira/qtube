<template>
  <div>
    <div
      id="question"
      class="d-flex justify-center align-center"
      :style="{
        fontSize: `${props.quizOption.question.size}px`,
        backgroundColor: props.quizOption.question.backgroundColor,
        color: getTextColor(props.quizOption.question.backgroundColor)
      }"
    >
      {{ props.quizOption.question.value }}
    </div>

    <div id="options">
      <div
        v-for="(option, index) of props.quizOption.options"
        :key="`option-${index}`"
        class="mx-10 mt-7 text-center rounded-lg"
      >
        {{ option }}
      </div>
    </div>

    <div id="progress">
      <div
        ref="timeBar"
        id="bar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IQuizItem } from "@/services/quiz/interfaces";
import { getTextColor } from "@/services/Color";
import {ref} from "vue";

const props = defineProps<{ quizOption: IQuizItem }>()

const timeBar = ref<HTMLDivElement>();

function startTimer() {
  timeBar.value?.classList.remove('animate');

  setTimeout(() => {
    timeBar.value?.classList.add('animate');

    setTimeout(startTimer, 8000);
  }, 500);
}

startTimer();
</script>
