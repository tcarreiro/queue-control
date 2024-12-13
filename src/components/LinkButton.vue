<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { type ButtonInfo, type ButtonStyle } from 'src/models/button.model';


export type LinkButtonProps = {
  route: ButtonInfo;
  btnStyle?:ButtonStyle
}

const props = withDefaults(defineProps<LinkButtonProps>(), {
  btnStyle: () => ({
    btnClass:'',
    minHeight:0,
    height:0,
    color:'white',
  }),
  route: () => ({
    label: '',
    link: '',
    icon: '',
  }),
});

</script>

<template>
  <div class="q-ma-md">
    <q-btn
      :class="props.btnStyle?.btnClass"
      :style="`
        min-width:${props.btnStyle?.minWidth}px;
        height:${props.btnStyle?.height}px;
      `"
      :color="props.btnStyle?.color"
      push
    >
      <div class="q-ma-0 row items-center no-wrap">
        <q-icon
          v-if="props.route.icon"
          :name="props.route.icon"
          left
        />
        <div class="text-center">
          {{ props.route.label }}
        </div>
      </div>
    </q-btn>
  </div>
</template>
