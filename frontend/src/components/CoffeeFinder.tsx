import React from 'react';
import search from '../assets/icons/search.svg'
import { FinderBarProps } from '../models/FrontCoffeeModel.ts';

const CoffeeFinder: React.FC <FinderBarProps> = ({ handleInputChange }) => {
  return (
    <div className="finder-wrapper">
      <button title="Search" className="find-button"><embed src={search} /></button>
      <label htmlFor="input-field" className="hide-search">Search</label>
      <input
        placeholder="Find your coffee..."
        name="input-field"
        id="input-field"
        type="text"
        onChange={event => handleInputChange(event.target.value)}
      />
    </div>
  );
};

export default CoffeeFinder;