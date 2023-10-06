<template>
  <q-select
    v-model="maintenance"
    :options="options"
    map-options
    emit-value
    :label="$t('inputs.activityLevel')"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useCalculatorStore } from 'stores/calculator-store';
import { storeToRefs } from 'pinia';
import { Maintenances } from 'src/logic/constants';
import { useI18n } from 'vue-i18n';

const calculatorStore = useCalculatorStore();
const { maintenance } = storeToRefs(calculatorStore);
const { t } = useI18n();

const options = computed(() =>
  Object.entries(Maintenances).map(([key, value]) => ({
    label: t(`maintenance.${key}`) + ` (${value}%)`,
    value: key,
  })),
);
</script>
