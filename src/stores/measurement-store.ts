import { defineStore } from 'pinia';
import type { MeasurementSystem } from 'src/logic/constants';
import { WeightUnitType } from 'src/logic/constants';
import { useStorage } from '@vueuse/core';

const preferenceStorageKey = 'preferencesStorage';

export const useMeasurementStore = defineStore('measurement', {
  state: () =>
    useStorage(preferenceStorageKey, {
      measurement: 'metric' as MeasurementSystem,
    }),
  getters: {
    baseWeightUnit(): WeightUnitType {
      return this.measurement === 'metric' ? 'g' : 'oz';
    },
  },
  actions: {
    setMeasurement(measurement: MeasurementSystem) {
      this.measurement = measurement;
    },
  },
});
