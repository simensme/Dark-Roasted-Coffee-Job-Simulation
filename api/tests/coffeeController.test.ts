// Tests for coffeeController.ts - API endpoints behaviour etc.
import * as coffeeService from '../src/services/coffeeService';
import {CoffeeModel, SizeCode} from '../src/models/coffeeModel';
import { listCoffeeDrinks, retrieveCoffeeDrink} from '../src/controllers/coffeeController';
import { Request, Response } from 'express';

describe('listCoffeeDrinks', () => {
    it('should return a list of coffee drinks with status 200', () => {
      const getCoffeeDrinksMock = jest.spyOn(coffeeService, 'getCoffeeDrinks').mockReturnValue([]);
      // Mock the Express Response object
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;
  
      // Call the listCoffeeDrinks function
      listCoffeeDrinks({} as Request, res);
  
      // Assertions
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'List of coffee drinks', data: [] });
      expect(getCoffeeDrinksMock).toHaveBeenCalled();
  
      getCoffeeDrinksMock.mockRestore();
    });
  
    it('should return status 500 in case of an error', () => {
      const errorMock = new Error('Test error');
      const getCoffeeDrinksMock = jest.spyOn(coffeeService, 'getCoffeeDrinks').mockImplementation(() => {
        throw errorMock;
      });
      // Mock the Express Response object
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;
  
      // Call the listCoffeeDrinks function
      listCoffeeDrinks({} as Request, res);
  
      // Assertions
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
      expect(getCoffeeDrinksMock).toHaveBeenCalled();
  
      getCoffeeDrinksMock.mockRestore();
    });
  });



  describe('retrieveCoffeeDrink', () => {
    it('should return coffee drink with status 200 if found', () => {
      const coffeeDrinkMock: CoffeeModel = {
        id: 405,
        name: 'Caffè Americano',
        formCode: 'Hot',
        displayOrder: 1,
        availability: 'Available',
        assets: {
          thumbnail: {
            large: {
              uri: 'https://example.com/thumbnail.jpg',
            },
          },
          fullSize: {
            uri: 'https://example.com/fullsize.jpg',
          },
          masterImage: {
            uri: 'https://example.com/masterimage.jpg',
          },
        },
        sizes: ['Short', 'Tall', 'Grande', 'Venti'].map(size => size as SizeCode), // Cast the array to SizeCode[]
        category: 'Americanos',
      };
  
      const getCoffeeDrinkByIdMock = jest.spyOn(coffeeService, 'getCoffeeDrinkById').mockReturnValue(coffeeDrinkMock);
  
      const req = {
        params: { id: '405' },
      } as unknown as Request;
  
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;
  
      retrieveCoffeeDrink(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Coffee drink with ID 405', data: coffeeDrinkMock });
      expect(getCoffeeDrinkByIdMock).toHaveBeenCalledWith('405');
  
      getCoffeeDrinkByIdMock.mockRestore();
    });
  
    it('should return not found error with status 404 if coffee drink is not found', () => {
      const getCoffeeDrinkByIdMock = jest.spyOn(coffeeService, 'getCoffeeDrinkById').mockReturnValue(undefined);
  
      const req = {
        params: { id: '405' },
      } as unknown as Request;
  
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;
  
      retrieveCoffeeDrink(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Coffee drink with ID 405 not found' });
      expect(getCoffeeDrinkByIdMock).toHaveBeenCalledWith('405');
  
      getCoffeeDrinkByIdMock.mockRestore();
    });
  
    it('should return internal server error with status 500 if an error occurs', () => {
      const errorMock = new Error('Test error');
  
      const getCoffeeDrinkByIdMock = jest.spyOn(coffeeService, 'getCoffeeDrinkById').mockImplementation(() => {
        throw errorMock;
      });
  
      const req = {
        params: { id: '405' },
      } as unknown as Request;
  
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;
  
      retrieveCoffeeDrink(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
      expect(getCoffeeDrinkByIdMock).toHaveBeenCalledWith('405');
  
      getCoffeeDrinkByIdMock.mockRestore();
    });
  });