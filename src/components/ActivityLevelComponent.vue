<template>
      <q-select
        v-model="value"
        :options="options"
        map-options
        :label="$t('inputs.activityLevel')" />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useCalculatorStore} from 'stores/calculator-store';
import {storeToRefs} from 'pinia';
import {Maintenances} from 'src/logic/constants';
import {useI18n} from 'vue-i18n';

export default defineComponent({
  name: 'ActivityLevelComponent',
  setup() {
    const calculatorStore = useCalculatorStore();
    const {maintenance} = storeToRefs(calculatorStore);
    const {t} = useI18n();

    return {
      value: maintenance,
      options: Object.entries(Maintenances).map(([key, value]) => {
        return {
          label: t(`maintenance.${key}`) + ` (${value}%)`,
          value: key
        };
      })
    }
  }
});
</script>
