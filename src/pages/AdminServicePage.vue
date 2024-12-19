<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import ActionButton from 'src/components/ActionButton.vue';
import { type ButtonInfo, type ButtonStyle } from 'src/models/button.model';
import { Routes } from 'src/models/page.model';
import { type Ticket } from 'src/models/serviceUser.model';
import { useApp } from 'src/stores/appState';
import { routePage } from 'src/utils/router';
import { onMounted, ref, type Ref } from 'vue';

const appState = useApp();
const serviceUser:Ref<Ticket> = ref(appState.getSelectedTicket()!);

onMounted(() => {
})

const btnInfoCancel:ButtonInfo = {
  label:'Registrar não comparecimento',
  icon: 'cancel'
}

const btnInfoRecall:ButtonInfo = {
  label:'Rechamar senha',
  icon: 'confirmation_number'
}

const btnInfoRequeue:ButtonInfo = {
  label:'Recolocar na fila',
  icon: 'replay_circle_filled'
}

const btnInfoConfirm:ButtonInfo = {
  label:'Finalizar atendimento',
  icon: 'check_circle'
}

const cancelTicket = () => {
  console.log("Ticket cancelled")
  // TODO: remove from table
  routePage(Routes.TICKET_QUEUE_MANAGEMENT);
}

const recallTicket = () => {
  console.log("Ticket recalled")
  // TODO: play sound alert
}

const requeueTicket = () => {
  console.log("Ticket requeued")
  // TODO: change order. New placement should be inputed?
  routePage(Routes.TICKET_QUEUE_MANAGEMENT);
}

const concludeTicket = () => {
  console.log("Ticket finalized")
  // TODO: update ticket status on table
  routePage(Routes.TICKET_QUEUE_MANAGEMENT);
}


</script>

<template>

  <q-layout view="hHh lpR fFf" class="bg-primary-bg">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Atendimento - Senha {{ serviceUser.ticketNumber }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>

    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row justify-between">
            <div class="left">
              <ActionButton
                :btnStyle="{color:'negative'}"
                :btnInfo="btnInfoCancel"
                @on-click="()=>{console.log('Cancelar serviço')}"
              />
              <ActionButton
                class="q-mx-md"
                :btnInfo="btnInfoRecall"
                @on-click="()=>{console.log('Rechamar senha')}"
              />
              <ActionButton
                :btnInfo="btnInfoRequeue"
                @on-click="()=>{console.log('Recolocar na fila')}"
              />
            </div>
            <div class="right">
              <ActionButton
                :btnStyle="{color:'positive'}"
                :btnInfo="btnInfoConfirm"
                @on-click="()=>{console.log('Confirmar encaminhamento')}"
              />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>





























  <!-- <q-page class="flex justify-center" style="min-height: none;">
    <div class="row full-width justify-start">
      <q-item-label
        class="text-h7"
        header
        style="border-bottom: 1px solid;"
      >
        {{props.header}}
      </q-item-label>
    </div>
    <div class="row full-width">
      IUASHdiuAHSUId
    </div>
    <div class="row full-width justify-center items-center wrap">
      <div class="col">
        <q-input filled v-model="serviceUser.name" label="Nome" style="max-width: 300px;min-width: 200px"/>
      </div>
      <div class="col">
        <q-input filled v-model="serviceUser.cpf" label="Cpf" style="max-width: 300px;min-width: 200px"/>
      </div>
      <div class="col">
        <q-input filled v-model="serviceUser.dob" label="Data de nascimento" style="max-width: 300px;min-width: 200px"/>
      </div>
    </div>
    <div class="row full-width justify-center" style="min-height: fit-content;">

    </div>
    <q-footer
      class="row bg-grey-3 justify-between items-center q-px-lg"
      style="min-height: 80px;"
    >
    <div class="left">
      <ActionButton
        :btnStyle="btnStyleNegative"
        :btnInfo="btnInfoCancel"
        @on-click="()=>{console.log('Cancelar serviço')}"
      />
      <ActionButton
        class="q-mx-md"
        :btnStyle="btnStyleAccent"
        :btnInfo="btnInfoRecall"
        @on-click="()=>{console.log('Rechamar senha')}"
      />
      <ActionButton
        :btnStyle="btnStyleAccent"
        :btnInfo="btnInfoRequeue"
        @on-click="()=>{console.log('Recolocar na fila')}"
      />
    </div>
    <div class="right">
      <ActionButton
        :btnStyle="btnStylePositive"
        :btnInfo="btnInfoConfirm"
        @on-click="()=>{console.log('Confirmar encaminhamento')}"
      />
    </div>
    </q-footer>
  </q-page> -->
</template>
