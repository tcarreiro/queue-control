<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import LoginFormDialog from 'src/components/LoginFormDialog.vue';
import RegisterFormDialog from 'src/components/RegisterFormDialog.vue';
import { type Ref, ref } from 'vue';

const showLoginDialog:Ref<boolean> = ref(false);

</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-primary-bg">


    <q-header>
      <q-toolbar bordered inset class="bg-primary text-white shadow-2 text-center">
        <q-toolbar-title class="text-h4">
          Queue Control
        </q-toolbar-title>
        <q-btn dense flat icon="account_circle" label="Login" @click="showLoginDialog = true" />
      </q-toolbar>
    </q-header>

    <RegisterFormDialog v-model="showLoginDialog"/>
    <!-- <LoginFormDialog v-model="showLoginDialog" /> -->

    <q-page-container>
    </q-page-container>

  </q-layout>
</template>

<style scoped lang="css">
</style>
