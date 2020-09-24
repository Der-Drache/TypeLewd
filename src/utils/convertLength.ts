import { LengthUnits } from '../data';

const conversionData = {
  [LengthUnits.centimeter]: {
    [LengthUnits.centimeter]: v => v,
    [LengthUnits.inch]: v => v / 2.54,
    [LengthUnits.foot]: v => v / 30.48,
    [LengthUnits.meter]: v => v / 100,
  },
  [LengthUnits.inch]: {
    [LengthUnits.centimeter]: v => v * 2.54,
    [LengthUnits.inch]: v => v,
    [LengthUnits.foot]: v => v / 12,
    [LengthUnits.meter]: v => v / 39.37,
  },
  [LengthUnits.foot]: {
    [LengthUnits.centimeter]: v => v * 30.48,
    [LengthUnits.inch]: v => v * 12,
    [LengthUnits.foot]: v => v,
    [LengthUnits.meter]: v => v / 3.281,
  },
  [LengthUnits.meter]: {
    [LengthUnits.centimeter]: v => v * 100,
    [LengthUnits.inch]: v => v * 39.37,
    [LengthUnits.foot]: v => v * 3.281,
    [LengthUnits.meter]: v => v,
  },
};

export const convertLength = (length: number, { from, to }: { from: LengthUnits, to: LengthUnits }): number => {
  return conversionData[from][to](length);
}
