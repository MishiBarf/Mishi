export interface CalculatorInput {
	age: number;
	weight: number;
}

export type Grams = number;
export type TableSpoon = number;
export type Measurements = 'metric' | 'imperial' | 'ts' | 'egg';

export interface DailyIntakes {
	meat: Grams;
	bone: Grams;
	liver: Grams;
	otherOrgans: Grams;
	vegetables: Grams;
	fishOil: TableSpoon;
	eggCount: number;
}
