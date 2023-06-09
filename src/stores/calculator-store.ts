import { defineStore } from 'pinia';
import { MaintenanceType } from 'src/logic/constants';
import { Weight } from 'src/logic/Weight';

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    maintenance: 'LowActivity' as MaintenanceType,
    weight: Weight.grams(0),
    mealCount: 1,
  }),
});
