<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { Capacitor } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { provide, ref} from 'vue';

const gameScores = ref<number[]>([])

const loadGameScores = async () => {

  let savedScoreString = ''

   if (Capacitor.isNativePlatform()) {
    const result = await Preferences.get({ key: 'gameScores'})

    savedScoreString = result.value || '';
   } else {
    savedScoreString = localStorage.getItem('gameScores') || '';
   }

   if (savedScoreString) {
    gameScores.value = JSON.parse(savedScoreString)
   }
};

const addGameScore = (score: number) => {
  if (gameScores.value.length >= 10) {
    gameScores.value.shift()
  }
  
  gameScores.value.push(score)

  const scoreString = JSON.stringify(gameScores.value)

  saveGameScores(scoreString)
}

const saveGameScores = async (scoreString: string) => {
  if (Capacitor.isNativePlatform()) {
    await Preferences.set({
      key: 'gameScores',
      value: scoreString
    })
  } else {
    localStorage.setItem('gameScores', scoreString)
  }
}

provide('gameScores', {
  gameScores, addGameScore
})

loadGameScores();
</script>
