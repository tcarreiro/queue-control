<script setup lang="ts">
import { type ServiceUser } from 'src/models/serviceUser.model';

export type QueueItemProps = {
  user:ServiceUser
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
      <q-item-label>{{ props.user.ticketNumber }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
