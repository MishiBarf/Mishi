<template>
  <q-card flat bordered class="q-mt-md q-mb-md">
    <q-card-section :horizontal="$q.screen.gt.sm">
      <single-result-component
        title="result.meat"
        :unit="measurements.baseWeightUnit"
        :daily-value="
          Math.ceil(daily.meatWeight.convertTo(measurements.baseWeightUnit))
        "
        :mult="totalMult"
        :percentage="IntakePercentages.meat"
      />
      <q-separator :vertical="$q.screen.gt.sm" />
      <single-result-component
        title="result.bone"
        :unit="measurements.baseWeightUnit"
        :daily-value="
          Math.ceil(daily.boneWeight.convertTo(measurements.baseWeightUnit))
        "
        :mult="totalMult"
        :percentage="IntakePercentages.bone"
      />
      <q-separator :vertical="$q.screen.gt.sm" />
      <single-result-component
        title="result.liver"
        :unit="measurements.baseWeightUnit"
        :daily-value="
          Math.ceil(daily.liverWeight.convertTo(measurements.baseWeightUnit))
        "
        :mult="totalMult"
        :percentage="IntakePercentages.liver"
      />
      <q-separator :vertical="$q.screen.gt.sm" />
      <single-result-component
        title="result.otherOrgans"
        :unit="measurements.baseWeightUnit"
        :daily-value="
          Math.ceil(
            daily.otherOrgansWeight.convertTo(measurements.baseWeightUnit),
          )
        "
        :mult="totalMult"
        :percentage="IntakePercentages.otherOrgans"
      />
      <q-separator :vertical="$q.screen.gt.sm" />
      <single-result-component
        title="result.fishOil"
        unit="tbsp"
        :daily-value="daily.fishOilTbsp"
        :mult="totalMult"
      />
      <q-separator :vertical="$q.screen.gt.sm" />
      <single-result-component
        title="result.eggs"
        unit=" egg"
        :daily-value="daily.eggsCount"
        :mult="totalMult"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import SingleResultComponent from 'components/SingleResultComponent.vue';
import { useResultStore } from 'stores/result-store';
import { storeToRefs } from 'pinia';
import { useMeasurementStore } from 'stores/measurement-store';
import { IntakePercentages } from 'src/logic/constants';
import { CalculatorState } from 'stores/calculator-store';

const measurements = useMeasurementStore();
const resStore = useResultStore();
const { totalMult, daily } = storeToRefs(resStore);

defineExpose({
  doCalculate(state: CalculatorState) {
    resStore.calculateResult(state);
  },
});
</script>
