<script setup lang="ts">
import { type Ticket } from 'src/models/serviceUser.model';

export type QueueItemProps = {
  ticket:Ticket
}

const emit = defineEmits(["onClick"]);

const props = defineProps<QueueItemProps>();

</script>

<template>
  <q-item
    clickable
    tag="a"
    @click="emit('onClick')"
  >
    <q-item-section>
      <q-item-label>{{ props.ticket.ticketNumber }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
