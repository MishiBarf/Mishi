<template>
  <q-btn-group>
    <q-btn-dropdown
      color="primary"
      label=""
      dropdown-icon="settings"
      style="border-right: 1px solid teal"
    >
      <q-list>
        <q-item-label header> {{ $t('inputs.measurements') }}</q-item-label>
        <q-item
          v-for="u in Measurements()"
          :key="u"
          clickable
          @click="setMeasurement(u)"
        >
          <q-item-section>
            <q-item-label>{{ $t(`measurements.${u}`) }}</q-item-label>
          </q-item-section>
          <q-item-section :class="{ invisible: measurement != u }" side>
            <q-icon name="check" color="primary" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>

    <q-btn
      color="primary"
      :label="$t('inputs.calculate')"
      @click="$emit('calculate', store.state)"
    ></q-btn>
  </q-btn-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCalculatorStore } from 'stores/calculator-store';
import { Measurements } from 'src/logic/constants';
import { useMeasurementStore } from 'stores/measurement-store';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'CalculatorButtonComponent',
  methods: {
    Measurements() {
      return Measurements;
    },
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    const calculatorStore = useCalculatorStore();
    const store = useMeasurementStore();
    const { measurement } = storeToRefs(store);

    return {
      store: calculatorStore,
      measurement,
      setMeasurement: store.setMeasurement,
      measurementOptions: Measurements.map((name) => ({
        label: t(`measurements.${name}`),
        value: name,
      })),
    };
  },
});
</script>
