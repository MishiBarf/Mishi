<template>
  <q-card flat bordered>
    <q-card-section horizontal>
      <single-result-component
        title="result.meat"
        :unit="measurements.baseWeightUnit"
        :daily-value="daily.meatWeight.convertTo(measurements.baseWeightUnit)"
        :mult="totalMult"
      />
      <q-separator vertical/>
      <single-result-component
        title="result.bone"
        :unit="measurements.baseWeightUnit"
        :daily-value="daily.boneWeight.convertTo(measurements.baseWeightUnit)"
        :mult="totalMult"
      />
      <q-separator vertical/>
      <single-result-component
        title="result.liver"
        :unit="measurements.baseWeightUnit"
        :daily-value="daily.liverWeight.convertTo(measurements.baseWeightUnit)"
        :mult="totalMult"
      />
      <q-separator vertical/>
      <single-result-component
        title="result.otherOrgans"
        :unit="measurements.baseWeightUnit"
        :daily-value="daily.otherOrgansWeight.convertTo(measurements.baseWeightUnit)"
        :mult="totalMult"
      />
      <q-separator vertical/>
      <single-result-component
        title="result.vegetables"
        :unit="measurements.baseWeightUnit"
        :daily-value="daily.vegetablesWeight.convertTo(measurements.baseWeightUnit)"
        :mult="totalMult"
      />
      <q-separator vertical/>
      <single-result-component
        title="result.fishOil"
        unit="tbsp"
        :daily-value="daily.fishOilTbsp"
        :mult="totalMult"
      />
      <q-separator vertical/>
      <single-result-component
        title="result.eggs"
        unit=" egg"
        :daily-value="daily.eggsCount"
        :mult="totalMult"
      />
    </q-card-section>
  </q-card>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import SingleResultComponent from 'components/SingleResultComponent.vue';
import {useResultStore} from 'stores/result-store';
import {storeToRefs} from 'pinia';
import {CalculatorState} from 'stores/calculator-store';
import {useMeasurementStore} from 'stores/measurement-store';

export default defineComponent({
  name: 'ResultComponent',
  components: {SingleResultComponent},
  methods: {
    doCalculate(state: CalculatorState) {
      console.log(state);
      this.store.calculateResult(state);
    }
  },
  setup() {
    const measurements = useMeasurementStore();
    const result = useResultStore();
    return {
      store: result,
      measurements,
      ...storeToRefs(result)
    }
  }
})
</script>
