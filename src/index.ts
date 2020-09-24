console.clear();
import { Maw, Penis, Slit, Tailhole } from './bodyParts';
import { Dragon } from './beings';
import { Sex } from './acts';
import { Penetration } from './materials/_Penetration';
import { Shape, Size } from './materials';
import { LengthUnits } from './data';
import { FunctionLogger } from './FunctionLogger';
import { SuiteFunctionLogger } from './SuiteFunctionLogger';


const zougui = new Dragon('Zougui')
  .setSlit(new Slit([
    new Penis()
      .setBarbs(true)
      .setColors(['red', 'orange', 'yellow'])
      .setOriginalSize(new Shape()
        .setZ(new Size(30, LengthUnits.centimeter))
        .setX(new Size(4.3, LengthUnits.centimeter))
        .setY(new Size(4.3, LengthUnits.centimeter))
      )
  ]))
  .setTailhole(new Tailhole());

const derg = new Dragon('T')
  .setSlit(new Slit([
    new Penis()
      .setBarbs(true)
      .setColors(['red', 'orange', 'yellow'])
      .setOriginalSize(new Shape()
        .setZ(new Size(31, LengthUnits.centimeter))
        .setX(new Size(3, LengthUnits.centimeter))
        .setY(new Size(3.2, LengthUnits.centimeter))
      )
  ]))
  .setTailhole(new Tailhole());

const derg2 = new Dragon('T2')
  .setSlit(new Slit([
    new Penis()
      .setBarbs(true)
      .setColors(['red', 'orange', 'yellow'])
      .setOriginalSize(new Shape()
        .setZ(new Size(31, LengthUnits.centimeter))
        .setX(new Size(5, LengthUnits.centimeter))
        .setY(new Size(5, LengthUnits.centimeter))
      )
  ]))
  .setTailhole(new Tailhole());

const derg3 = new Dragon('T3')
  .setSlit(new Slit([
    new Penis()
      .setBarbs(true)
      .setColors(['red', 'orange', 'yellow'])
      .setOriginalSize(new Shape()
        .setZ(new Size(31, LengthUnits.centimeter))
        .setX(new Size(9, LengthUnits.centimeter))
        .setY(new Size(9, LengthUnits.centimeter))
      )
  ]))
  .setTailhole(new Tailhole());

const derg4 = new Dragon('T4')
  .setSlit(new Slit([
    new Penis()
      .setBarbs(true)
      .setColors(['red', 'orange', 'yellow'])
      .setOriginalSize(new Shape()
        .setZ(new Size(31, LengthUnits.centimeter))
        .setX(new Size(4, LengthUnits.centimeter))
        .setY(new Size(4, LengthUnits.centimeter))
      )
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

esandril.head()
  .maw()
  .setOriginalSize(new Shape()
    .setZ(new Size(30, LengthUnits.centimeter))
    .setX(new Size(3, LengthUnits.centimeter))
    .setY(new Size(3, LengthUnits.centimeter))
  )
  .setMaxSize(new Shape()
    .setZ(new Size(35, LengthUnits.centimeter))
    .setX(new Size(7, LengthUnits.centimeter))
    .setY(new Size(70, LengthUnits.centimeter))
  );

const sex = new Sex('69')
  .addBeing(zougui)
  .addBeing(esandril);

const points = esandril.maw().getStretchedSizes();

zougui
  .penetrate(esandril.maw())
  .withHis(zougui.head())
  .wait(5000);

esandril
  .penetrate(zougui.tailhole())
  .withHis(esandril.tail());

//sex.perform();

console.log('-----------------------------------------------------------------------------------------');
console.log();
console.log('hole min sizeX:', esandril.maw().originalSize().x().centimeters());
console.log('hole max sizeX:', esandril.maw().maxSize().x().centimeters());
console.log();
console.log('hole min sizeY:', esandril.maw().originalSize().y().centimeters());
console.log('hole max sizeY:', esandril.maw().maxSize().y().centimeters());
console.log();
console.log('hole min sizeZ:', esandril.maw().originalSize().z().centimeters());
console.log('hole max sizeZ:', esandril.maw().maxSize().z().centimeters());
console.log();
esandril.maw().penetrations().forEach((penetration, i) => {
  console.log(`penetrator ${i + 1} sizeX:`, penetration.penetrator().originalSize().x().centimeters());
});
console.log();
esandril.maw().penetrations().forEach((penetration, i) => {
  console.log(`penetrator ${i + 1} sizeY:`, penetration.penetrator().originalSize().y().centimeters());
});
console.log();
esandril.maw().penetrations().forEach((penetration, i) => {
  console.log(`penetrator ${i + 1} sizeZ:`, penetration.penetrator().originalSize().z().centimeters());
});
console.log();
console.log('sizes:', points)
