export const roundToPlaces = (value: number, places: number): number => {
  const mult = Math.pow(10, places);
  return Math.round(value * mult) / mult;
}
