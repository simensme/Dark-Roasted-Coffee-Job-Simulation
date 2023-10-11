import { Request, Response } from 'express';
import {CoffeeModel} from '../models/coffeeModel';
import { getCoffeeDrinks, getCoffeeDrinkById } from '../services/coffeeService';

// Route handler to fetch an entire list of coffee drinks
export const listCoffeeDrinks = (req: Request, res: Response) => {
  try {
    const coffeeDrinks: CoffeeModel[] = getCoffeeDrinks();
    res.status(200).json({ message: 'List of coffee drinks', data: coffeeDrinks });
  } catch (err) {
    console.error('Error occurred while retrieving coffee drinks:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Route handler to retrieve individual drinks
export const retrieveCoffeeDrink = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const coffeeDrink: CoffeeModel | undefined = getCoffeeDrinkById(id);
    if (coffeeDrink) {
      res.status(200).json({ message: `Coffee drink with ID ${id}`, data: coffeeDrink });
    } else {
      res.status(404).json({ error: `Coffee drink with ID ${id} not found` });
    }
  } catch (err) {
    console.error('Error occurred while retrieving coffee drink:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};



