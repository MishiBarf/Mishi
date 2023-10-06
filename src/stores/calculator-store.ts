import { defineStore } from 'pinia';
import { MaintenanceType } from 'src/logic/constants';
import { Weight } from 'src/logic/Weight';
import { useStorage } from '@vueuse/core';

const calculatorStorageKey = 'calculatorStorage';

export interface CalculatorState {
  maintenance: MaintenanceType;
  weight: Weight;
  mealCount: number;
}

const storeSerializer = {
  read: (v: any): CalculatorState | null => {
    if (v) {
      const json = JSON.parse(v);
      json.weight = Weight.grams(json.weight);
      return json;
    }
    return null;
  },
  write: (v: any): string => {
    const obj = { ...v, ...{ weight: v.weight.convertTo('g') } };
    return JSON.stringify(obj);
  },
};

export const useCalculatorStore = defineStore('calculator', {
  state: () =>
    useStorage(
      calculatorStorageKey,
      {
        maintenance: 'LowActivity' as MaintenanceType,
        weight: Weight.grams(0),
        mealCount: 1,
      },
      undefined,
      { serializer: storeSerializer },
    ).value,
  getters: {
    state(): CalculatorState {
      return {
        maintenance: this.maintenance,
        weight: this.weight as Weight,
        mealCount: this.mealCount,
      };
    },
  },
});
