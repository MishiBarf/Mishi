const smartKg = (x: number): IntakeType => {
  return Math.round(x);
};


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
    dailyMeatIntake: smartKg(dailyMeatIntake),
    dailyBoneIntake: smartKg(dailyMeatIntake * 0.1),
    dailyOilIntake: smartKg(dailyMeatIntake * 0.05),
    dailyEggIntake: smartKg(dailyMeatIntake * 0.05),
    dailyOffalIntake: smartKg(dailyMeatIntake * 0.05)
  };

}

export interface CalculatorInput {
  age: number;
  weight: number;
  sex: "male" | "female";
}

export type IntakeType = number;

export interface CalculatorOutput {
  dailyMeatIntake: IntakeType;
  dailyBoneIntake: IntakeType;
  dailyOilIntake: IntakeType;
  dailyEggIntake: IntakeType;
  dailyOffalIntake: IntakeType;
}

