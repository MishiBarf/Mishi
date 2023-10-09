import { defineStore } from 'pinia';
import { CalculatorState } from 'stores/calculator-store';
import { IntakePercentages, Maintenances } from 'src/logic/constants';
import { Weight } from 'src/logic/Weight';
import { useStorage } from '@vueuse/core';

const resultStorageKey = 'resultStorage';

const weightKeys = [
  'meatWeight',
  'boneWeight',
  'liverWeight',
  'otherOrgansWeight',
];
const resultSerializer = {
  read: (v: any): CalculatorState | null => {
    if (v) {
      const json = JSON.parse(v);
      for (const key of weightKeys) {
        json.daily[key] = Weight.grams(json.daily[key]);
      }
      return json;
    }
    return null;
  },
  write: (v: any): string => {
    const daily = { ...v.daily };
    for (const key of weightKeys) {
      daily[key] = daily[key].convertTo('g');
    }
    const obj = { ...v, ...{ daily } };
    return JSON.stringify(obj);
  },
};

export const useResultStore = defineStore('result', {
  state: () =>
    useStorage(
      resultStorageKey,
      {
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
      },
      undefined,
      { serializer: resultSerializer },
    ),
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
