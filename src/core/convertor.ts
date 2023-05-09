import type { Measurements } from './types';

export const G_TO_OZ_RATIO = 0.03527396195;

export const OZ_TO_LB_RATIO = 16;

export const LB_TO_G_RATIO = 453.6;

export const WEIGHT_FORMATTER = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 });

export function formatGrams(grams: number, measure: Measurements) {
	switch (measure) {
		case 'metric': {
			if (grams >= 1000) {
				return `${grams / 1000} kg`;
			}
			return `${WEIGHT_FORMATTER.format(grams)} g`;
		}
		case 'egg':
			return WEIGHT_FORMATTER.format(grams);
		case 'ts':
			return grams == 1 ? '1 tbsp' : `${grams} tbsp`;
		default: {
			const oz = gramsToOunces(grams);

			if (oz >= OZ_TO_LB_RATIO) {
				return `${WEIGHT_FORMATTER.format(ouncesToPounds(oz))} lb`;
			}
			return `${WEIGHT_FORMATTER.format(oz)} oz`;
		}
	}
}

export function gramsToOunces(grams: number) {
	return grams * G_TO_OZ_RATIO;
}

export function ouncesToPounds(ounces: number) {
	return ounces / OZ_TO_LB_RATIO;
}
