import type { Measurements } from "./calculator";


export const G_TO_OZ_RATIO = 0.03527396195;

export const OZ_TO_LB_RATIO = 16;

export const LB_TO_G_RATIO = 453.6;

export function formatGrams(grams: number, measure: Measurements) {
    if (measure === 'metric') {
        if (grams >= 1000) {
            return `${grams / 1000} kg`;
        }
        return `${grams} g`;
    }

    const oz = gramsToOunces(grams);
    
    if (oz >= OZ_TO_LB_RATIO) {
        return `${ouncesToPounds(oz).toFixed(2)} lb`;
    } 
    return `${oz.toFixed(2)} oz`;
}

export function gramsToOunces(grams: number) {
    return grams * G_TO_OZ_RATIO;
}

export function ouncesToPounds(ounces: number) {
    return ounces / OZ_TO_LB_RATIO;
}