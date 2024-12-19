<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import ActionButton from 'src/components/ActionButton.vue';
import { type ButtonInfo, type ButtonStyle } from 'src/models/button.model';
import { Routes } from 'src/models/page.model';
import { type Ticket, ServiceType, TicketStatus } from 'src/models/serviceUser.model';
import { routePage } from 'src/utils/router';
import { onMounted, ref, type Ref } from 'vue';

const hasUserId:Ref<boolean> = ref(false);

const createTicketRequest = (service:ServiceType, route?:Routes) => {
  // TODO: if user exists, then should redirect to new page with form
  // const serviceUser:Ticket = {
  //   user: {
  //     name:'Thiago',
  //     dob:'1989-03-13',
  //     cpf:13124315212,
  //   },
  //   ticketNumber: service.toString().substring(0,2).toUpperCase()+'0002',
  //   ticketCreatedAt: new Date().toISOString(),
  //   serviceType: service,
  //   ticketStatus: TicketStatus.ON_QUEUE

  //   // TODO: add to table
  // }

  // TODO: Confirmation on modal? new page?
    if (route) routePage(route)
}

const redirectToForm = () => {
  routePage(Routes.TICKET_SERVICE_REQUEST_USER_FORM);
}

onMounted(() => {
  // TODO: services must come from backend so admin is able to register new services
  // TODO: get from backend service model (has user identifier?)
  // hasUserId.value = getServiceModel();
});

// TO BE REMOVED. See above
const linksList: ButtonInfo[] = [
  {
    label: 'Consulta',
    icon: 'question_answer',
    action: hasUserId.value ? redirectToForm : () => createTicketRequest(ServiceType.CONSULTATION, Routes.TICKET_QUEUE_MANAGEMENT)
  },
  {
    label: 'Vacinas',
    icon: 'vaccines',
    action: hasUserId.value ? redirectToForm : () => createTicketRequest(ServiceType.VACCINATION, Routes.TICKET_QUEUE_MANAGEMENT)
  }
];

const btnStyle:ButtonStyle = {
  btnClass:'text-h6',
  height:60,
  minWidth:400,
  color: 'accent'
}

</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-primary-bg">

    <q-header bordered class="bg-primary text-white text-center">
      <q-toolbar>
        <q-toolbar-title class="text-h4">
          Gerador de senhas de atendimento
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="flex justify-center items-center" style="min-height: 700px;">
        <ActionButton
          class="q-mx-lg q-my-md"
          v-for="link in linksList" :key="`sm-${link}`"
          :btnStyle="btnStyle"
          :btnInfo="link"
          @onClick="link.action"
        />
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="css">
</style>
