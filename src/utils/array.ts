export const map = <T, U>(
  source: T[],
  iteratee: (value: T, i: number, source: T[], currentMapping: U[]) => U
): U[] => {
  // @ts-ignore
  const mapping: U[] = []

  source.forEach((value, i) => {
    mapping.push(iteratee(value, i, source, mapping));
  });

  return mapping;
}

export const last = <T>(array: T[]): T => {
  return array[array.length - 1];
}
