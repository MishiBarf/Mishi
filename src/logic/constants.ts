
export const Units = ["metric", "imperial"] as const;

export type UnitType = typeof Units[number];
