<script setup lang="ts">
import { Routes } from 'src/models/page.model';
import { type AdminState, useAdminApp } from 'src/stores/adminStore';
import { getRoute } from 'src/utils/router';
import { computed, ref, type Ref } from 'vue';

const logged:Ref<boolean> = ref(true);

const newAdminApp:AdminState = {
  page:Routes.SERVICES_CONFIG,
}

const adminStore = useAdminApp();
adminStore.setupApp(newAdminApp);

const renderedElement = computed(() => adminStore.page ? getRoute(adminStore.page)?.module : null);

</script>

<template>
  <div id="content-modules">
    <component v-if="!logged" :is="renderedElement"></component> <!-- TODO: login page -->
    <component v-else :is="renderedElement"></component>
  </div>
</template>
