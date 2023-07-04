import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice';
import NavButton from './NavButton';

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
  };

  return (
    <div className="navbar navbar-expand-xl">
      <div className="flex flex-wrap h-full items-center justify-between mx-auto px-[15px] max-w-[1140px]">
        <a href="/" className="navbar-brand">
          <h1 className="tm-site-title mb-0">PRODUCT ADMIN</h1>
        </a>
        <div className="flex">
          <NavButton link="/" title="Dashboard" />
          <NavButton link="/reports" title="Reports" />
          <NavButton link="/products" title="Products" />
          <NavButton link="/accounts" title="Account" />
          <NavButton link="/settings" title="Settings" />
        </div>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="text-white text-lg font-bold"
          >
            {`${user.firstName} ${user.lastName} logout`}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
