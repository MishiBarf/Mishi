import type { CalculatorInput, DailyIntakes, Grams } from './types';

const smartWeight = (x: number): Grams => {
	return Math.round(x);
};

export function calculateCatIntakes({ sex, age, weight }: CalculatorInput): DailyIntakes {
	let totalIntake = 0;

	if (sex === 'male') {
		if (age < 1) {
			totalIntake = weight * 0.06;
		} else {
			totalIntake = weight * 0.03;
		}
	} else {
		if (age < 1) {
			totalIntake = weight * 0.06;
		} else if (age < 7) {
			totalIntake = weight * 0.025;
		}
	}

	return {
		meat: smartWeight(totalIntake * 0.64),
		bone: smartWeight(totalIntake * 0.20),
		liver: smartWeight(totalIntake * 0.03),
		otherOrgans: smartWeight(totalIntake * 0.03),
		vegetables: smartWeight(totalIntake * 0.1)
	};
}
