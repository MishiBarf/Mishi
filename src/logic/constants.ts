export const AcceptedCookiesKey = 'accepted_cookies';

export const FeedbackUrl = 'https://forms.gle/9cHuvLU6Rt6us4Gv6';

export const Measurements = ['metric', 'imperial'] as const;

export type MeasurementSystem = (typeof Measurements)[number];

export const WeightUnits = ['g', 'kg', 'oz', 'lb'] as const;
export type WeightUnitType = (typeof WeightUnits)[number];

export const Maintenances = {
  LowActivity: 2,
  NormalActivity: 3,
  HighActivity: 4,
  LessThan6Months: 9,
  Between6And18Months: 6,
} as const;

export const IntakePercentages = {
  meat: 0.7,
  bone: 0.2,
  liver: 0.03,
  otherOrgans: 0.07,
};

export type MaintenanceType = keyof typeof Maintenances;

export const DefaultDateFormatter = new Intl.DateTimeFormat('fr-FR');
