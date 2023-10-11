import express from 'express';
import {listCoffeeDrinks, retrieveCoffeeDrink } from '../controllers/coffeeController';

const router = express.Router();

// API Routes
router.get('/coffee-drinks', listCoffeeDrinks);

router.get('/coffee-drinks/:id', retrieveCoffeeDrink);

export default router;