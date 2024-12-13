<script setup lang="ts">
import { Routes } from 'src/models/page.model';
import { useApp, type AppState } from 'src/stores/appState';
import { getRoute } from 'src/utils/router';
import { computed, ref, type Ref } from 'vue';

const initialized:Ref<boolean> = ref(true);

const newAppState:AppState = {
  componentKey:0,
  locale:'br',
  page:Routes.TICKET_SERVICE_REQUEST,
  pageParams:'',
  token:''
}

const appStore = useApp();
appStore.setupApp(newAppState);

const renderedElement = computed(() => appStore.page ? getRoute(appStore.page)?.module : null);

</script>

<template>
  <q-layout view="lhh Lpr lff">
    <q-page-container>
      <div id="content-modules">
        <component v-if="initialized" :is="renderedElement" :key="appStore.componentKey"></component>
      </div>
    </q-page-container>
  </q-layout>
</template>
