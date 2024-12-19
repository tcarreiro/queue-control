<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { type QForm, useQuasar } from 'quasar';
import { User } from 'src/models/serviceUser.model';
import { validateEmail } from 'src/utils/utils';
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

const userNameFirstFocus:Ref<boolean> = ref(false);
const userNameLostFirstFocus:Ref<boolean> = ref(false);

const userEmailFirstFocus:Ref<boolean> = ref(false);
const userEmailLostFirstFocus:Ref<boolean> = ref(false);

const userConfirmEmailFirstFocus:Ref<boolean> = ref(false);
const userConfirmEmailLostFirstFocus:Ref<boolean> = ref(false);
const userConfirmEmailInput:Ref<string> = ref("");

const userPasswordInput:Ref<string> = ref("");
const isUserPasswordVisible:Ref<boolean> = ref(false);
const userPasswordFirstFocus:Ref<boolean> = ref(false);
const userPasswordLostFirstFocus:Ref<boolean> = ref(false);

const isUserConfirmPasswordVisible:Ref<boolean> = ref(false);
const userConfirmPasswordInput:Ref<string> = ref("");
const userConfirmPasswordFirstFocus:Ref<boolean> = ref(false);
const userConfirmPasswordLostFirstFocus:Ref<boolean> = ref(false);

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

const validateUserName = () => {
  return inputedUser.value.name.length>2
};

const validateUserEmail = () => {
  return validateEmail(inputedUser.value.email);
};

const validateUserEmailConfirm = () => {
  return inputedUser.value.email === userConfirmEmailInput.value;
};

const validateUserPassword = () => {
  return true;
}

const validateUserPasswordConfirm = () => {
  return userPasswordInput.value === userConfirmPasswordInput.value;
}

const isDataValid = computed(()=>
  validateUserName() &&
  validateUserEmail() && validateUserEmailConfirm() &&
  validateUserPassword() && validateUserPasswordConfirm());

const acceptDialog = async () => {
  if (isDataValid.value) {
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
  <AcceptableDialog
    v-model="showDialog"
    title="Registrar"
    accept-label="Enviar"
    :accept-valid="isDataValid"
    @on-accept="acceptDialog()"
  >

    <q-form>
      <q-card-section class="scroll" style="max-height: 500px;">
        <q-input
          v-model="inputedUser.name"
          label="Nome completo"
          outlined
          @focus="userNameFirstFocus=true"
          @blur="userNameLostFirstFocus=true"
          :error="userNameFirstFocus && userNameLostFirstFocus && !validateUserName()"
          :error-message="`Nome inválido`"
        />
        <q-input
          v-model="inputedUser.email"
          label="E-mail"
          type="email"
          outlined
          @focus="userEmailFirstFocus=true"
          @blur="userEmailLostFirstFocus=true"
          :error="userEmailFirstFocus && userEmailLostFirstFocus && !validateUserEmail()"
          :error-message="`E-mail inválido`"
        />
        <q-input
          v-model="userConfirmEmailInput"
          label="Confirme o e-mail"
          type="email"
          outlined
          @focus="userConfirmEmailFirstFocus=true"
          @blur="userConfirmEmailLostFirstFocus=true"
          :error="userConfirmEmailFirstFocus && userConfirmEmailLostFirstFocus && !validateUserEmailConfirm()"
          :error-message="`O e-mail de confirmação não confere com o anterior`"
        />
        <q-input
          v-model="userPasswordInput"
          label="Senha"
          :type="!isUserPasswordVisible ? 'password' : 'text'"
          outlined
          @focus="userPasswordFirstFocus=true"
          @blur="userPasswordLostFirstFocus=true"
          :error="userPasswordFirstFocus && userPasswordLostFirstFocus && !validateUserPassword()"
          :error-message="`Senha não atende pré-requisitos`"
        >
          <template v-slot:append>
            <q-icon
              :name="isUserPasswordVisible ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isUserPasswordVisible = !isUserPasswordVisible"
            />
          </template>
        </q-input>
        <q-input
          v-model="userConfirmPasswordInput"
          label="Confirme a senha"
          :type="!isUserConfirmPasswordVisible ? 'password' : 'text'"
          outlined
          @focus="userConfirmPasswordFirstFocus=true"
          @blur="userConfirmPasswordLostFirstFocus=true"
          :error="userConfirmPasswordFirstFocus && userConfirmPasswordLostFirstFocus && !validateUserPasswordConfirm()"
          :error-message="`A senha de confirmação não confere com a anterior`"
        >
          <template v-slot:append>
            <q-icon
              :name="isUserConfirmPasswordVisible ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isUserConfirmPasswordVisible = !isUserConfirmPasswordVisible"
            />
          </template>
        </q-input>
      </q-card-section>
    </q-form>

  </AcceptableDialog>
</template>
