<script setup lang="ts">
import { Routes } from 'src/models/page.model';
import { useApp, type AppState } from 'src/stores/appState';
import { getRoute } from 'src/utils/router';
import { computed, ref, type Ref } from 'vue';

const initialized:Ref<boolean> = ref(true);

const newAppState:AppState = {
  componentKey:0,
  locale:'br',
  page:Routes.MAIN_PAGE,
  pageParams:'',
  token:'',
  selectedTicket:null
}

const appStore = useApp();
appStore.setupApp(newAppState);

const renderedElement = computed(() => appStore.page ? getRoute(appStore.page)?.module : null);

</script>

<template>
  <div id="content-modules">
    <component v-if="initialized" :is="renderedElement" :key="appStore.componentKey"></component>
  </div>
</template>
