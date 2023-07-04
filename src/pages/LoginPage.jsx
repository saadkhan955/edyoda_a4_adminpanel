import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login validation
    if (username === 'admin' && password === 'password') {
      // Simulating a successful login
      const sessionToken = uuidv4(); // Generate a unique session token
      localStorage.setItem('sessionToken', sessionToken); // Store the session token in localStorage

      // Redirect to the dashboard page
      window.location.href = '/';
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='tm-mt-big tm-mb-big'>
      <div className="w-full mx-auto tm-login-col">
        <div className='tm-bg-primary-dark tm-block tm-block-h-auto'>
          <div className='flex flex-wrap'>
            <div className="w-full text-center">
              <h2 className="tm-block-title mb-4">Welcome to Dashboard</h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="form-group flex flex-col">
                <label htmlFor="username" className="mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group mt-3 flex flex-col">
                <label htmlFor="password" className="mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-4">
                <button
                  className="btn btn-primary w-full uppercase"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <button className="mt-5 btn btn-primary w-full uppercase">Forgot your Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
