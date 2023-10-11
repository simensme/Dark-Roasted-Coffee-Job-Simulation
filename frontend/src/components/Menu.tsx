import React from 'react'
import home from '../assets/icons/home.svg'
import likes from '../assets/icons/likes.svg'
import notifications from '../assets/icons/notifications.svg'
import cart from '../assets/icons/cart.svg'

const Menu: React.FC = () => (
  <footer>
    {[
      { title: 'Home', icon: home },
      { title: 'Shopping-cart', icon: cart },
      { title: 'Likes', icon: likes },
      { title: 'Notifications', icon: notifications }
    ].map(({ title, icon }) => (
      <button key={title} title={title}>
        <img alt={title} src={icon} />
      </button>
    ))}
  </footer>
);

export default Menu;