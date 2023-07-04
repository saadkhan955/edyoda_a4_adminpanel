import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';

const AccountsPage = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());

    // Clear the session token from localStorage
    localStorage.removeItem('sessionToken');

    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <div>
      <h2 className="text-2xl text-white font-bold bg-red-500 p-4 rounded-lg m-4">
        {counter}
      </h2>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default AccountsPage;
