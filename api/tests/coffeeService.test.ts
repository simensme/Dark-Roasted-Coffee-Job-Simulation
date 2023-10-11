// Tests for coffeeService.ts - general functionality for retrieving coffeedata.
import { getCoffeeDrinks, getCoffeeDrinkById } from '../src/services/coffeeService';

describe('getCoffeeDrinks', () => {
    it('should return an array of coffee drinks', () => {
      const coffeeDrinks = getCoffeeDrinks();
      expect(Array.isArray(coffeeDrinks)).toBe(true);
    });
  });
  
  describe('getCoffeeDrinkById', () => {
      it('should return the correct coffee drink when a valid ID is provided', () => {
          // Only IDs from 405 to and including 489.
          const validIDs = [405, 406, 470, 466];
          validIDs.forEach(id => {
              const coffeeDrink = getCoffeeDrinkById(id.toString());
              expect(coffeeDrink).toBeDefined();
              expect(coffeeDrink?.id).toBe(id);
          });
      });
    
      it('should return undefined when an invalid ID is provided', () => {
        const coffeeDrinkId = '999';
        const coffeeDrink = getCoffeeDrinkById(coffeeDrinkId);
        expect(coffeeDrink).toBeUndefined();
      });
    });