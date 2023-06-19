<template>
  <q-input
    :label="$t('inputs.catWeight')"
    v-model="value"
    type="number"
    min="0"
    :suffix="suffix"
  ></q-input>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useCalculatorStore } from 'stores/calculator-store';
import { storeToRefs } from 'pinia';
import { useMeasurementStore } from 'stores/measurement-store';
import { Weight } from 'src/logic/Weight';

export default defineComponent({
  name: 'WeightInputComponent',
  computed: {
    value: {
      get() {
        return this.calcStore.weight.convertTo(this.suffix);
      },
      set(value: number) {
        const nwValue =
          this.measurementStore.measurement === 'metric'
            ? Weight.kilograms(value)
            : Weight.pounds(value);
        this.calcStore.weight = nwValue;
      },
    },
  },
  setup() {
    const calcStore = useCalculatorStore();
    const measurementStore = useMeasurementStore();
    const { weight } = storeToRefs(calcStore);

    return {
      weight,
      calcStore,
      measurementStore,
      suffix: computed(() =>
        measurementStore.measurement === 'metric' ? 'kg' : 'lb'
      ),
    };
  },
});
</script>
