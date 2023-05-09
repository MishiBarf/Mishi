import type { CalculatorInput, DailyIntakes, Grams } from './types';

const smartWeight = (x: number): Grams => {
	return Math.round(x);
};

export function calculateCatIntakes({ age, weight }: CalculatorInput): DailyIntakes {
	const totalIntake = age < 1 ? weight * 0.06 :  weight * 0.03;

	return {
		meat: smartWeight(totalIntake * 0.64),
		bone: smartWeight(totalIntake * 0.2),
		liver: smartWeight(totalIntake * 0.03),
		otherOrgans: smartWeight(totalIntake * 0.03),
		vegetables: smartWeight(totalIntake * 0.1)
	};
}
