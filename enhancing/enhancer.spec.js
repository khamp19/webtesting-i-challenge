const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

const fullEnhancement = 20;
const fullDurability = 100;

const item = {
  name: 'sword',
  enhancement: fullEnhancement / 2, //under 15
  durability: fullDurability / 4, //under 50
}

const fullItem = { //full power!
  name: 'mace',
  enhancement: fullEnhancement,
  durability: fullDurability
}

describe ('enhancer.js', ()=> {
  describe('succeed()', () => {
    it('should increase item enhancement by 1', () => {
      expect(succeed(item).enhancement).toBe(item.enhancement++);
      expect(succeed(fullItem).enhancement).toBe(fullEnhancement);
    });
    it('should not increase item enhancement past 20', () => {
      expect(succeed(item).enhancement).toBeLessThanOrEqual(fullEnhancement);
      expect(succeed(fullItem).enhancement).toBeLessThanOrEqual(fullEnhancement);
    });
  });

  describe('fail()', () => {

    test('enhancement < 15, reduce durability by 5 or to 0', () => {
      const currentDur = item.durability;
      if (item.durability > 5) {
        expect(fail(item).durability).toBe(currentDur - 5);
      } else {
        expect(fail(item).durability).toBe(0);
      }
    });
    test('enhancement >= 15, reduce durability by 10 ro to 0 && reduce enhancement by 1', () => {
      const currentDur = fullItem.durability;
      const currentEn = fullItem.enhancement;
      if(fullItem.durability < 10){
        expect(fail(fullItem).durability).toBe(0);
      } else {
        expect(fail(fullItem).durability).toBe(currentDur - 10);
      }
      expect(fail(fullItem).enhancement).toBe(currentEn - 1);
    });
    test('durability always > 0', () => {
      expect(fail(item).durability).toBeGreaterThanOrEqual(0);
      expect(fail(fullItem).durability).toBeGreaterThanOrEqual(0);
    });
    test('enhancement always > 0', () => {
      expect(fail(item).enhancement).toBeGreaterThanOrEqual(0);
      expect(fail(fullItem).enhancement).toBeGreaterThanOrEqual(0);

    });
  });

  describe('repair()', () => {
    it('should restore durability to 100', () => {
      const newItem = repair(item);
      expect(newItem.durability).toBe(100);
      const newEnhanced = repair(fullItem);
      expect(newEnhanced.durability).toBe(100);
    });
  });

  // describe('get()', () => {

  // })
});