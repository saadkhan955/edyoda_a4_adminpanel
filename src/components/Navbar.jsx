import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice';
import NavButton from './NavButton'; // Assuming NavButton is extracted to its own component file

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="navbar h-[100px] bg-[#567086] px-60 flex items-center justify-between">
      <h1 className="text-white text-2xl font-bold">PRODUCT ADMIN</h1>
      <div className="flex">
        <NavButton link="/" title="Dashboard" />
        <NavButton link="/reports" title="Reports" />
        <NavButton link="/products" title="Products" />
        <NavButton link="/accounts" title="Account" />
        <NavButton link="/settings" title="Settings" />
      </div>
      {isLoggedIn && (
        <button
          onClick={() => dispatch(logout())}
          className="text-white text-lg font-bold"
        >
          {`${user.firstName} ${user.lastName} logout`}
        </button>
      )}
    </div>
  );
};

export default Navbar;
