<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Scores</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h3 v-show="!gameScores.length">No scores yet!</h3>
      <ion-list>
        <ion-item v-for="(score, index) in gameScores" :key="index">
          <ion-label>
            <h2>Score: {{ score }} </h2>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import { inject } from 'vue'
import { GameScoresProvider } from '@/types'

// injects gameScores array ref
const { gameScores } = inject<GameScoresProvider>('gameScores')!;

</script>
