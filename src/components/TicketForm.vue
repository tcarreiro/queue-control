<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { type QForm, useQuasar } from 'quasar';
import { Customer } from 'src/models/serviceUser.model';
import { validateCpf, dateInterval } from 'src/utils/utils';
import { ref, type Ref } from 'vue';


const emit = defineEmits(["onSubmit"]);

const $q = useQuasar();

const inputedUser:Ref<Customer> = ref(new Customer());

const form:Ref<QForm|null> = ref(null);

const validateUserDob = () => {
  const age = dateInterval(inputedUser.value.dob);
  return age >= 10 || 'A data de nascimento deve ser pelo menos 10 anos atrás'
};

const validateUserCpf = () => {
  return validateCpf(inputedUser.value.cpf);
}

const submitForm = () => {
  const isValid = form.value?.validate();

  if (isValid) {
    emit('onSubmit', inputedUser.value);
  } else {
    $q.notify({
      color: 'red',
      textColor: 'primary',
      icon: 'warning',
      message: 'Por favor, preencha todos os campos corretamente.'
    });
  }
};

</script>

<template>
  <q-form
    @submit.prevent="submitForm"
    ref="form"
  >
    <q-input
      v-model="inputedUser.name"
      label="Nome"
      outlined
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Entre com um nome válido']"
    />
    <q-input
      v-model="inputedUser.dob"
      label="Data de Nascimento"
      type="date"
      outlined
      lazy-rules
      :rules="[validateUserDob]"
    />
    <q-input
      v-model="inputedUser.cpf"
      type="number"
      label="CPF"
      outlined
      lazy-rules
      :rules="[validateUserCpf]"
    />

    <q-btn label="Enviar" type="submit" color="primary" class="q-mt-md"/>
  </q-form>
</template>
