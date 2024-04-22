<template>
    <div id="game">
      <ion-button v-if="showButton" @click="handleClickStart">Start</ion-button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, inject } from 'vue'
import { IonButton } from '@ionic/vue';
import { launch } from '@/game/game.js';
import { GameScoresProvider } from '@/types'

// injects addGameScore method
const { addGameScore } = inject<GameScoresProvider>('gameScores')!;

// binds to the v-if on our button to toggle visibility
const showButton = ref(true)

function handleClickStart() {
  // hides launch button
  showButton.value = false;

  // Runs the launch function
  launch();
}

// adds score when event emitted from Phaser
function handleGameEnded(event: Event) {
  const customEvent = event as CustomEvent;
  addGameScore(customEvent.detail.score);
}

// adds event listener for gameEnded event
onMounted(() => {
  window.addEventListener("gameEnded", handleGameEnded);
});

// removes event listener for gameEnded event
onUnmounted(() => {
  window.removeEventListener("gameEnded", handleGameEnded);
});
</script>

<style scoped>
#game {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>