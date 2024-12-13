<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import ActionButton from 'src/components/ActionButton.vue';
import QueueItem from 'src/components/QueueItem.vue';
import SpinnerLoader from 'src/components/SpinnerLoader.vue';
import { type ButtonInfo, type ButtonStyle } from 'src/models/button.model';
import { type ServiceUser } from 'src/models/serviceUser.model';
import { getUsersQueue } from 'src/service/queue.service';
import { onMounted, ref, type Ref } from 'vue';

const loadingData:Ref<boolean> = ref(false);
const usersQueue:Ref<Array<ServiceUser>> = ref([]);

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
  color: 'accent'
}

const btnInfo:ButtonInfo = {
  label:'Chamar senha',
  icon: 'confirmation_number'
}

const callTicket = () => {
  console.log('Próximo ticket!');
}

</script>

<template>
  <SpinnerLoader v-if="loadingData"/>
  <q-page v-else class="flex justify-center">
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
            v-for="user in usersQueue" :key="`sm-${user.ticketNumber}`"
            v-bind:user
            @on-click="()=>console.log('clicou em '+user.name)"
          />
        </q-list>
      </div>
    </div>
    <q-footer
      class="absolute-bottom row bg-grey-3 justify-end items-center q-px-lg"
    >
      <ActionButton
        :btnStyle="btnStyle"
        :btnInfo="btnInfo"
        @on-click="callTicket()"
      />
    </q-footer>
  </q-page>
</template>
