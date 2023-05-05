export interface CalculatorInput {
	age: number;
	weight: number;
	sex: Sex;
}

export type Sex = 'male' | 'female';
export type Grams = number;
export type Measurements = 'metric' | 'imperial';

export interface DailyIntakes {
	meat: Grams;
	bone: Grams;
	liver: Grams;
	otherOrgans: Grams;
	vegetables: Grams;
}
