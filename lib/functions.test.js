const { newMap, filterEvens, findFirstEven, reduceObject, everyEven } = require('./functions');

describe('functions', () => {
    
    it('maps array using callback', () => {
      const n = [3, 4, 5, 7, 9];
      const doubled = newMap(n)
      expect(doubled).toEqual([6, 8, 10, 14, 18]);
    });

    it('using filter to return only evens', () => {
        const allEvens = filterEvens([1, 2, 3, 4, 5, 6])
        expect(allEvens).toEqual([2, 4, 6]);
    });

    it('use index to return index of first item whos callback is true', () => {
        const firstEven = findFirstEven([1, 3, 5, 9, 11, 2, 4])
        expect(firstEven).toEqual(2);
    })
   
    it('use reduce', () => {
        const howMany = reduceObject(['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'])
        expect(howMany).toEqual({ dog: 2, chicken: 3, cat: 1, rabbit: 1 })
    })
});

describe('allEvens', () => {
    it('returns true if all evens', () => {
      expect(everyEven([2, 4, 6, 8])).toBeTruthy();
    });

    it('returns false if there is an odd', () => {
      expect(everyEven([2, 4, 5, 6])).toBeFalsy();
    });
  });