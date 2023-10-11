import React from 'react'
import { CardProps } from '../models/FrontCoffeeModel.ts'
import star from '../assets/icons/star.svg'

const CoffeeCard: React.FC<CardProps> = ({ drink }) => {
  const image = drink.assets.thumbnail.large.uri || drink.assets.fullSize.uri || drink.assets.masterImage.uri;
  return (
    <div className="coffee-card">
      <figure>
        <div className="rating">
          <embed src={star} ></embed>
          <p>4.5</p>
        </div>
        <img alt={drink.name} src={image}></img>
        <figcaption>
          <h5>{drink.name}</h5>
          <p>{drink.formCode}</p>
          <div className="cost-wrapper">
            <p className="price">$2.45</p>
            <button className="cart-button">+</button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default CoffeeCard;