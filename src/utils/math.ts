export const lerp = (value: number, dirtyMin: number, dirtyMax: number): number => {
  const min = Math.min(dirtyMin, dirtyMax);
  const max = Math.max(dirtyMin, dirtyMax);

  return (max - min) * value + min;
}

export const norm = (value: number, min: number, max: number): number => {
  return (value - min) / (max - min);
}

export const mean = (numbers: number[]): number => {
  return numbers.length
    ? numbers.reduce((total, number) => total + number) / numbers.length
    : 0;
}

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
}
