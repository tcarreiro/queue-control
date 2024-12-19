<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { type QForm, useQuasar } from 'quasar';
import { User } from 'src/models/serviceUser.model';
import { validateCpf, dateInterval } from 'src/utils/utils';
import { computed, ref, type Ref, watch } from 'vue';
import AcceptableDialog from './AcceptableDialog.vue';


const emit = defineEmits(["onSubmit", "onClose", "update:modelValue"]);
const $q = useQuasar();

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const showDialog:Ref<boolean> = ref(props.modelValue);

const inputedUser:Ref<User> = ref(new User());
const form:Ref<QForm|null> = ref(null);

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


const validateUserDob = () => {
  const age = dateInterval(inputedUser.value.dob);
  return age >= 10;
};

const validateUserCpf = () => {
  return validateCpf(inputedUser.value.cpf);
}

const isDataValid = computed(()=>validateUserCpf() && validateUserDob());

const acceptDialog = () => {
  if (isDataValid.value) {
    form.value?.submit();
    showDialog.value = false;
    emit('onSubmit', inputedUser.value);
  } else {
    if ($q.platform.is.mobile) {
      $q.notify({
        type: 'negative',
        message: 'Por favor, preencha todos os campos corretamente.'
      });
    }
  }
};

</script>

<template>
  <AcceptableDialog v-model="showDialog" title="Login" accept-label="Enviar" :accept-valid="isDataValid" @on-accept="acceptDialog()">

    <q-form
      @submit.prevent="acceptDialog"
      ref="form"
    >
      <q-card-section class="scroll" style="max-height: 450px;">
        <q-input
          v-model="inputedUser.name"
          label="Nome"
          outlined
          lazy-rules
          :rules="[ val => val && val.length > 2 || 'Entre com um nome válido']"
        />
        <q-input
          v-model="inputedUser.dob"
          label="Data de Nascimento"
          type="date"
          outlined
          lazy-rules
          :rules="[validateUserDob || 'A data de nascimento deve ser pelo menos 10 anos atrás']"
        />
        <q-input
          v-model="inputedUser.cpf"
          label="CPF"
          mask="###.###.###-##"
          outlined
          lazy-rules
          :rules="[validateUserCpf || 'CPF inválido']"
        />
      </q-card-section>
    </q-form>

  </AcceptableDialog>
</template>
