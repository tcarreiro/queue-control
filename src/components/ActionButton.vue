<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { type ButtonInfo, type ButtonStyle } from 'src/models/button.model';

export type ActionButtonProps = {
  btnInfo: ButtonInfo;
  btnStyle?:ButtonStyle;
  disabled?:boolean;
}

const emit = defineEmits(["onClick"]);

const props = withDefaults(defineProps<ActionButtonProps>(), {
  btnStyle: () => ({
    btnClass:'text-h7',
    height:30,
    minWidth:200,
    color:'primary',
  }),
  disabled:false,
});

</script>

<template>
  <q-btn
    :class="props.btnStyle?.btnClass"
    :style="`
      min-width:${props.btnStyle?.minWidth}px;
      height:${props.btnStyle?.height}px;
    `"
    :color="props.btnStyle?.color"
    @click="emit('onClick')"
    push
    :disabled="props.disabled"
  >
    <div class="q-ma-0 row items-center no-wrap">
      <q-icon
        v-if="props.btnInfo.icon"
        :name="props.btnInfo.icon"
        left
      />
      <div class="text-center">
        {{ props.btnInfo.label }}
      </div>
    </div>
  </q-btn>
</template>
