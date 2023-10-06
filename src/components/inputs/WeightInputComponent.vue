<template>
  <q-input
    :label="$t('inputs.catWeight')"
    v-model="value"
    type="number"
    min="0"
    :suffix="suffix"
  ></q-input>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useCalculatorStore } from 'stores/calculator-store';
import { useMeasurementStore } from 'stores/measurement-store';
import { Weight } from 'src/logic/Weight';

const calcStore = useCalculatorStore();
const measurementStore = useMeasurementStore();
const suffix = computed(() =>
  measurementStore.measurement === 'metric' ? 'kg' : 'lb',
);

const value = computed({
  get: () => {
    return Number.parseFloat(
      calcStore.weight.convertTo(suffix.value).toFixed(2),
    );
  },
  set: (value: number) => {
    calcStore.weight =
      measurementStore.measurement === 'metric'
        ? Weight.kilograms(value)
        : Weight.pounds(value);
  },
});
</script>
