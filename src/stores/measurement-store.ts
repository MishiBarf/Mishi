import { defineStore } from 'pinia';
import type { MeasurementSystem } from 'src/logic/constants';

export const useMeasurementStore = defineStore('measurement', {
  state: () => ({
    measurement: 'metric' as MeasurementSystem,
  }),
  actions: {
    setMeasurement(measurement: MeasurementSystem) {
      this.measurement = measurement;
    },
  },
});
