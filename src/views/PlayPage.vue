<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Play</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Play</ion-title>
        </ion-toolbar>
      </ion-header>
      <PhaserContainer/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import PhaserContainer from '@/components/PhaserContainer.vue';
</script>
