import { defineStore } from 'pinia';
import { CalculatorState } from 'stores/calculator-store';
import { IntakePercentages, Maintenances } from 'src/logic/constants';
import { Weight } from 'src/logic/Weight';

export const useResultStore = defineStore('result', {
  state: () => ({
    visible: false,
    daily: {
      meatWeight: Weight.Massless,
      boneWeight: Weight.Massless,
      liverWeight: Weight.Massless,
      otherOrgansWeight: Weight.Massless,
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
        meatWeight: Weight.grams(totalIntake * IntakePercentages.meat),
        boneWeight: Weight.grams(totalIntake * IntakePercentages.bone),
        liverWeight: Weight.grams(totalIntake * IntakePercentages.liver),
        otherOrgansWeight: Weight.grams(
          totalIntake * IntakePercentages.otherOrgans,
        ),
        eggsCount: 1 / 7,
        fishOilTbsp: 1,
      };
    },
  },
});
