import { MeasurementSystem, WeightUnitType } from 'src/logic/constants';

const OuncesToGramsRatio = 28.3495;
const PoundsToGramsRatio = 453.592;

export const NumberFormatter = Intl.NumberFormat('fr-Fr', {
  minimumFractionDigits: 2,
});

export class Weight {
  private constructor(private readonly _grams: number) {}

  public static Massless = new Weight(0);

  public metricString(unit: MeasurementSystem) {
    if (unit === 'metric') {
      const value = this._grams / 1000;
      return `${NumberFormatter.format(value)} kg`;
    }
    const value = this._grams / PoundsToGramsRatio;
    return `${NumberFormatter.format(value)} lb`;
  }

  public convertTo(unit: WeightUnitType): number {
    switch (unit) {
      case 'kg':
        return this._grams / 1000;
      case 'lb':
        return this._grams / PoundsToGramsRatio;
      case 'oz':
        return this._grams / OuncesToGramsRatio;
      case 'g':
      default:
        return this._grams;
    }
  }



  public static grams(grams: number) {
    return new Weight(grams);
  }

  public static ounces(ounces: number) {
    return new Weight(ounces * OuncesToGramsRatio);
  }

  public static pounds(pounds: number) {
    return new Weight(pounds * PoundsToGramsRatio);
  }

  public static kilograms(kg: number) {
    return new Weight(kg * 1000);
  }
}
