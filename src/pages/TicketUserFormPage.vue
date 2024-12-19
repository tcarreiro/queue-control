<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import TicketForm from 'src/components/TicketForm.vue';
import { Routes } from 'src/models/page.model';
import { routePage } from 'src/utils/router';

const onSubmit = () => {
  console.log('Form Submitted');

  routePage(Routes.TICKET_SERVICE_REQUEST);
};

</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-primary-bg">
    <q-header bordered class="bg-primary text-white text-center">
      <q-toolbar>
        <q-toolbar-title class="text-h4">
          Formulário de Atendimento
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="q-pa-md">
        <TicketForm @onSubmit="onSubmit" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="css">
</style>
