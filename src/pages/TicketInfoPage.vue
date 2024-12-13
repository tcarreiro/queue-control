<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import ActionButton from 'src/components/ActionButton.vue';
import { type ButtonInfo, type ButtonStyle } from 'src/models/button.model';
import { type ServiceUser } from 'src/models/serviceUser.model';
import { getUsersQueue } from 'src/service/queue.service';
import { onMounted, ref, type Ref } from 'vue';

export type TicketInfoProps = {
  item:ServiceUser;
  header:string;
}

const props = defineProps<TicketInfoProps>();

const serviceUser:Ref<ServiceUser> = ref(props.item);
onMounted(() => {
})

const btnStylePositive:ButtonStyle = {
  btnClass:'text-h7',
  height:30,
  minWidth:200,
  color: 'positive'
}

const btnStyleNegative:ButtonStyle = {
  btnClass:'text-h7',
  height:30,
  minWidth:200,
  color: 'negative'
}

const btnStyleAccent:ButtonStyle = {
  btnClass:'text-h7',
  height:30,
  minWidth:200,
  color: 'accent'
}

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


</script>

<template>
  <q-page class="flex justify-center" style="min-height: none;">
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
  </q-page>
</template>


<!--
    <div class="row">
      <q-item-label
        class="row justify-center q-mb-xl text-h2"
        header
      >
        {{ props.header }}
      </q-item-label>
    </div>
    <div class="row full-width" style="min-height: 600px;">
      <div class="col">
        <q-item-label
          class="text-h7"
          header
        >
          Atendimento - SENHA {{ props.item.user.ticketNumber }}
        </q-item-label>

        <q-list bordered>
          <QueueItem
            v-for="item in usersQueue" :key="`sm-${item.ticketNumber}`"
            v-bind:item
          />
        </q-list>
      </div>
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
-->
