<template>
  <q-form class="q-gutter-md">
    <activity-level-component></activity-level-component>
    <weight-input-component></weight-input-component>
    <q-input
      type="number"
      v-model="mealCount"
      min="1"
      :label="$t('inputs.mealCount')"
    >
    </q-input>
    <calculator-button-component @calculate="data => $emit('calculate', data)" ></calculator-button-component>
  </q-form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import WeightInputComponent from 'components/WeightInputComponent.vue';
import ActivityLevelComponent from 'components/ActivityLevelComponent.vue';
import {useCalculatorStore} from 'stores/calculator-store';
import {storeToRefs} from 'pinia';
import CalculatorButtonComponent from 'components/CalculateButtonComponent.vue';

export default defineComponent({
  name: 'CalculatorComponent',
  components: {CalculatorButtonComponent, ActivityLevelComponent, WeightInputComponent},
  setup() {
    const calculatorStore = useCalculatorStore();
    const {mealCount} = storeToRefs(calculatorStore);

    return {
      mealCount,
      store: calculatorStore
    };
  },
});
</script>
