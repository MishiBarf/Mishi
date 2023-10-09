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
    <calculator-button-component
      @calculate="(data) => $emit('calculate', data)"
    ></calculator-button-component>
  </q-form>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useCalculatorStore } from 'stores/calculator-store';
import WeightInputComponent from 'components/inputs/WeightInputComponent.vue';
import ActivityLevelComponent from 'components/inputs/ActivityLevelComponent.vue';
import CalculatorButtonComponent from 'components/buttons/CalculateButtonComponent.vue';

const store = useCalculatorStore();
const { mealCount } = storeToRefs(store);
</script>
