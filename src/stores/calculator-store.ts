import { defineStore } from 'pinia';
import { MaintenanceType } from 'src/logic/constants';
import { Weight } from 'src/logic/Weight';

export interface CalculatorState {
  maintenance: MaintenanceType,
  weight: Weight,
  mealCount: number
}

export const useCalculatorStore = defineStore('calculator', {
  state: (): CalculatorState => ({
    maintenance: 'LowActivity' as MaintenanceType,
    weight: Weight.grams(0),
    mealCount: 1,
  }),
  getters: {
    state() : CalculatorState {
      return {
        maintenance: this.maintenance,
        weight: this.weight as Weight,
        mealCount: this.mealCount
      }
    }
  }
});
