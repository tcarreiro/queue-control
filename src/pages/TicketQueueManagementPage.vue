<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import ActionButton from 'src/components/ActionButton.vue';
import QueueItem from 'src/components/QueueItem.vue';
import SpinnerLoader from 'src/components/SpinnerLoader.vue';
import { type ButtonInfo, type ButtonStyle } from 'src/models/button.model';
import { Routes } from 'src/models/page.model';
import { type Ticket } from 'src/models/serviceUser.model';
import { getUsersQueue } from 'src/service/queue.service';
import { useApp } from 'src/stores/appState';
import { routePage } from 'src/utils/router';
import { onMounted, ref, type Ref } from 'vue';

const loadingData:Ref<boolean> = ref(false);
const usersQueue:Ref<Array<Ticket>> = ref([]);
const appState = useApp();

onMounted(() => {
  getQueue()
})

const getQueue = async () => {
  loadingData.value = true;
  try{
    usersQueue.value = await getUsersQueue();
  } catch (error) {
    console.log(error);
  } finally {
    loadingData.value = false;
  }
}

const btnStyle:ButtonStyle = {
  btnClass:'text-h7',
  height:30,
  minWidth:200,
  color: 'primary'
}

const btnInfo:ButtonInfo = {
  label:'Chamar senha',
  icon: 'confirmation_number'
}

const callTicket = (route?:Routes) => {
  appState.clearSelectedTicket();
  if (usersQueue.value[0]){
    appState.setSelectedTicket(usersQueue.value[0])
    if (route) routePage(route)
  }
}

</script>

<template>
  <q-layout view="hHh lpR fFf" class="bg-primary-bg">
    <SpinnerLoader v-if="loadingData"/>
    <q-page-container v-else>
      <q-page class="flex justify-center">
        <q-item-label
          class="text-h4"
          header
        >
          Atendimento
        </q-item-label>
        <div class="row full-width" style="min-height: 600px;">
          <div class="col">
            <q-item-label
              class="text-h6"
              header
            >
              Senhas em espera
            </q-item-label>

            <q-list bordered separator>
              <QueueItem
                v-for="ticket in usersQueue" :key="`sm-${ticket.ticketNumber}`"
                v-bind:ticket
                @on-click="()=>console.log('clicou em '+ticket.user?.name)"
              />
            </q-list>
          </div>
        </div>
      </q-page>
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="flex justify-end">
          <ActionButton
            :btnStyle="btnStyle"
            :btnInfo="btnInfo"
            @on-click="callTicket(Routes.TICKET_DETAILS)"
            :disabled="loadingData"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
