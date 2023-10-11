import React from 'react';
import burger from '../assets/icons/burger.svg'
import person from '../assets/images/person.png'

const Navigation: React.FC = () => {
  return (
    <div className="nav">
      <button title="menu">
        <img alt="menu icon" src={burger} />
      </button>
      <button title="profile">
        <img alt="personal photo" src={person} />
      </button>
    </div>
  );
};

export default Navigation;