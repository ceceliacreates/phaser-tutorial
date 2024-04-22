<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { provide, ref} from 'vue';

const gameScores = ref<number[]>([])

const addGameScore = (score: number) => {
  gameScores.value.push(score)
}

provide('gameScores', {
  gameScores, addGameScore
})

</script>
