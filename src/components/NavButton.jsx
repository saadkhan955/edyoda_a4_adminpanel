import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faFileAlt, faShoppingCart, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const NavButton = ({ link, title }) => {
  const getIconComponent = (title) => {
    switch (title) {
      case 'Dashboard':
        return <FontAwesomeIcon icon={faGauge} className="nav-button-icon" />;
      case 'Reports':
          return <FontAwesomeIcon icon={faFileAlt} className="nav-button-icon" />;
      case 'Products':
        return <FontAwesomeIcon icon={faShoppingCart} className="nav-button-icon" />;
      case 'Account':
        return <FontAwesomeIcon icon={faUser} className="nav-button-icon" />;
      case 'Settings':
        return <FontAwesomeIcon icon={faCog} className="nav-button-icon" />;
      default:
        return null;
    }
  };

  const iconComponent = getIconComponent(title);

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `nav-button h-[100px] text-white w-28 flex justify-center items-center flex-col ${
          isActive ? 'bg-yellow-500' : 'bg-primary'
        }`
      }
    >
      <div className="nav-button-icon-container">{iconComponent}</div>
      <p className="nav-button-title pb-4">{title}</p>
    </NavLink>
  );
};

export default NavButton;
