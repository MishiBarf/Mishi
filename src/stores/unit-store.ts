import {defineStore} from 'pinia';
import type {UnitType} from 'src/logic/constants';

export const useUnitStore = defineStore('units', {
  state: () => ({
    unit: 'metric' as UnitType,
  }),
  getters: {},
  actions: {
    setUnit(unit: UnitType) {
      console.log(unit);
      this.unit = unit;
    },
  },
});
