import { defineStore } from 'pinia';
import { CalculatorState } from 'stores/calculator-store';
import { Maintenances } from 'src/logic/constants';
import { Weight } from 'src/logic/Weight';

export const useResultStore = defineStore('result', {
  state: () => ({
    visible: false,
    daily: {
      meatWeight: Weight.Massless,
      boneWeight: Weight.Massless,
      liverWeight: Weight.Massless,
      otherOrgansWeight: Weight.Massless,
      vegetablesWeight: Weight.Massless,
      fishOilTbsp: 0,
      eggsCount: 0,
    },
    totalMult: 1,
  }),
  actions: {
    calculateResult(data: CalculatorState) {
      const meatPercentage = Maintenances[data.maintenance];
      const totalIntake = data.weight.convertTo('g') * (meatPercentage / 100);
      this.totalMult = data.mealCount;
      this.daily = {
        meatWeight: Weight.grams(totalIntake * 0.64),
        boneWeight: Weight.grams(totalIntake * 0.2),
        liverWeight: Weight.grams(totalIntake * 0.03),
        otherOrgansWeight: Weight.grams(totalIntake * 0.03),
        vegetablesWeight: Weight.grams(totalIntake * 0.1),
        eggsCount: 1 / 7,
        fishOilTbsp: 1,
      };
    },
  },
});
