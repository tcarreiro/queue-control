<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import ActionButton from 'src/components/ActionButton.vue';
import { type ButtonInfo, type ButtonStyle } from 'src/models/button.model';
import { Routes } from 'src/models/page.model';
import { type ServiceUser, ServiceType } from 'src/models/serviceUser.model';
import { routePage } from 'src/utils/router';

const createTicketRequest = (service:ServiceType, route?:Routes) => {
  const serviceUser:ServiceUser = {
    name:'Thiago',
    dob:'1989-03-13',
    cpf:13124315212,
    ticketNumber: service.toString().substring(0,2).toUpperCase()+'0002',
    ticketCreatedAt: new Date().toISOString(),
    service: service
  }

  console.log(serviceUser);

  if (route) routePage(route)


}

const linksList: ButtonInfo[] = [
  {
    label: 'Consulta',
    icon: 'question_answer',
    action: () => createTicketRequest(ServiceType.CONSULTATION, Routes.TICKET_QUEUE_MANAGEMENT)
  },
  {
    label: 'Vacinas',
    icon: 'vaccines',
    action: () => createTicketRequest(ServiceType.VACCINATION, Routes.TICKET_QUEUE_MANAGEMENT)
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
  <q-page class="flex flex-center">
    <div>
      <q-item-label
        class="q-mb-xl text-h2 text-center"
        header
      >
      Gerador de senhas de atendimento
      </q-item-label>

      <div class="flex justify-center" style="max-width: 900px;">
          <ActionButton
            class="q-mx-lg q-my-md"
            v-for="link in linksList" :key="`sm-${link}`"
            :btnStyle="btnStyle"
            :btnInfo="link"
            @onClick="link.action"
          />
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="css">

@media screen {

}
</style>
