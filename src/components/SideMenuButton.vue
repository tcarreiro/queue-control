<script setup lang="ts">
export interface CentralMenuButtonProps {
  label: string;
  link: string;
  icon?: string;
};

withDefaults(defineProps<CentralMenuButtonProps>(), {
  icon: '',
});
</script>

<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
