<template>
  <q-btn @click="toggleTheme()" flat dense round icon="compare"></q-btn>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useColorMode } from '@vueuse/core';

const theme = useColorMode();

const quasar = useQuasar();
quasar.dark.set(theme.value === 'dark');

function toggleTheme() {
  quasar.dark.toggle();
  theme!.value = quasar.dark.isActive ? 'dark' : 'light';
}
</script>
