export const lerp = (value: number, min: number, max: number): number => {
  return (max - min) * value + min;
}
