export const Measurements = ['metric', 'imperial'] as const;

export type MeasurementSystem = (typeof Measurements)[number];

export const WeightUnits = ['g', 'kg', 'oz', 'lb'] as const;
export type WeightUnitType = (typeof WeightUnits)[number];

export const Maintenances = {
  LowActivity: 2,
  NormalActivity: 3,
  HighActivity: 4,
  LessThan4Months: 9,
  '4To12Months': 6,
} as const;

export type MaintenanceType = keyof typeof Maintenances;
