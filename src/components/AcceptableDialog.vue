<script setup lang="ts">
import { ref, type Ref, watch } from 'vue';

const emit = defineEmits(["onAccept", "onClose", "update:modelValue"]);

const props = defineProps({
  title:{
    type:String,
    required:true,
  },
  acceptLabel:{
    type:String,
    required:true,
  },
  acceptValid:{
    type:Boolean,
    required:true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const showDialog:Ref<boolean> = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    showDialog.value = newVal;
  }
);

watch(
  () => showDialog.value,
  (newVal) => {
    emit('update:modelValue', newVal);
  }
);

const acceptForm = () => {
  emit('onAccept');
};

</script>

<template>
  <q-dialog persistent v-model="showDialog" backdrop-filter="blur(4px)">

    <q-card class="full-width full-height" style="max-width: 450px; max-height: 550px;">
      <q-bar inset class="bg-primary text-white">
        {{props.title}}
        <q-space/>
        <q-btn dense rounded flat icon="close" v-close-popup/>
      </q-bar>

      <slot></slot>

      <q-card-actions class="text-center">
        <q-btn :label="props.acceptLabel" type="submit" color="primary" class="q-mt-md" @click="acceptForm()" :disable="!props.acceptValid"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
