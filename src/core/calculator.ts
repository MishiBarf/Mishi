const twoDecimals = (x: number) => Math.round(x * 100) / 100;

export function calculateCatIntakes({ sex, age, weight }: CalculatorInput): CalculatorOutput {
  let dailyMeatIntake = 0;


  if (sex === "male") {
    if (age < 1) {
      dailyMeatIntake = weight * 0.1;
    } else if (age < 7) {
      dailyMeatIntake = weight * 0.03;
    } else {
      dailyMeatIntake = weight * 0.02;
    }
  } else {
    if (age < 1) {
      dailyMeatIntake = weight * 0.1;
    } else if (age < 7) {
      dailyMeatIntake = weight * 0.25;
    } else {
      dailyMeatIntake = weight * 0.015;
    }
  }

  return {
    dailyMeatIntake,
    dailyBoneIntake: twoDecimals(dailyMeatIntake * 0.1),
    dailyOilIntake: twoDecimals(dailyMeatIntake * 0.05),
    dailyEggIntake: twoDecimals(dailyMeatIntake * 0.05),
    dailyOffalIntake: twoDecimals(dailyMeatIntake * 0.05)
  };

}

export interface CalculatorInput {
  age: number;
  weight: number;
  sex: "male" | "female";
}

export interface CalculatorOutput {
  dailyMeatIntake: number;
  dailyBoneIntake: number;
  dailyOilIntake: number;
  dailyEggIntake: number;
  dailyOffalIntake: number;
}

