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
          v-for="u in Measurements"
          :key="u"
          clickable
          @click="measStore.setMeasurement(u)"
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
      @click="$emit('calculate', calcStore.state)"
    ></q-btn>
  </q-btn-group>
</template>

<script lang="ts" setup>
import { useCalculatorStore } from 'stores/calculator-store';
import { Measurements } from 'src/logic/constants';
import { useMeasurementStore } from 'stores/measurement-store';
import { storeToRefs } from 'pinia';

const calcStore = useCalculatorStore();
const measStore = useMeasurementStore();
const { measurement } = storeToRefs(measStore);
</script>
