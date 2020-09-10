import { Penis, Slit, Tailhole } from './bodyParts';
import { Dragon } from './beings';
import { Sex } from './acts';

console.clear();

const zougui = new Dragon('Zougui')
  .setSlit(new Slit([
    new Penis()
      .setBarbs(true)
      .setColors(['red', 'orange', 'yellow'])
  ]))
  .setTailhole(new Tailhole());

const esandril = new Dragon('Esandril')
  .setSlit(new Slit([
    new Penis()
      .setKnot(true)
      .setRidges(true)
      .setColor('gray-slight-bluish')
  ]))
  .setTailhole(new Tailhole());

const sex = new Sex('69')
  .addBeing(zougui)
  .addBeing(esandril);

zougui
  .penetrate(esandril.maw())
  .withHis(zougui.head())
  .wait(5000);

esandril
  .penetrate(zougui.tailhole())
  .withHis(esandril.tail());

sex.perform();
