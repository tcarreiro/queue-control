<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { type ButtonInfo, type ButtonStyle } from 'src/models/button.model';

export type ActionButtonProps = {
  btnInfo: ButtonInfo;
  btnStyle?:ButtonStyle;
}

const emit = defineEmits(["onClick"]);

const props = withDefaults(defineProps<ActionButtonProps>(), {
  btnStyle: () => ({
    btnClass:'',
    height:0,
    minWidth:0,
    color:'white',
  }),
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
