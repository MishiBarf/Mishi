export interface CalculatorInput {
  age: number;
  weight: number;
  sex: Sex;
}

export type Sex = "male" | "female";
export type IntakeType = number;
export type Measurements = "metric" | "imperial";

export interface CalculatorOutput {
  dailyMeatIntake: IntakeType;
  dailyBoneIntake: IntakeType;
  dailyOilIntake: IntakeType;
  dailyEggIntake: IntakeType;
  dailyOffalIntake: IntakeType;
}
