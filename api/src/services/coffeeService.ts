import {Assets, Availability, CoffeeModel, FormCode, SizeCode} from "../models/coffeeModel";
import coffeeData from '../../../data/CoffeeData.json';


// Retrieve all coffee drinks
export const getCoffeeDrinks = (): CoffeeModel[] => {
  return coffeeData.map((coffee: any) => {
    return {
      name: coffee.name as string,
      formCode: coffee.formCode as FormCode,
      displayOrder: coffee.displayOrder as number,
      availability: coffee.availability as Availability,
      assets: coffee.assets as Assets,
      sizes: coffee.sizes as SizeCode[],
      id: coffee.id as number,
      category: coffee.category as string,
    };
  });
};

// Get single coffee drinks
export const getCoffeeDrinkById = (id: string): CoffeeModel | undefined => {
  const coffee = coffeeData.find((coffee: any) => coffee.id === parseInt(id));
  if (coffee) {
    return {
      name: coffee.name as string,
      formCode: coffee.formCode as FormCode,
      displayOrder: coffee.displayOrder as number,
      availability: coffee.availability as Availability,
      assets: coffee.assets as Assets,
      sizes: coffee.sizes as SizeCode[],
      id: coffee.id as number,
      category: coffee.category as string,
    };
  }
  return undefined;
};