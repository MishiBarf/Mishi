import { defineStore } from 'pinia';
import type { MeasurementSystem } from 'src/logic/constants';
import {WeightUnitType} from 'src/logic/constants';

export const useMeasurementStore = defineStore('measurement', {
  state: () => ({
    measurement: 'metric' as MeasurementSystem,
  }),
  getters: {
    baseWeightUnit() : WeightUnitType {
      return this.measurement === 'metric' ? 'g' : 'oz';
    }
  },
  actions: {
    setMeasurement(measurement: MeasurementSystem) {
      this.measurement = measurement;
    },
  },
});
