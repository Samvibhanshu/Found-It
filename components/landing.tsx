'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import IsValidUser from '@/lib/auth';
import getUsername from '@/lib/username';

const LandingPage: React.FC = () => {
  const router = useRouter();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleSignupClick = () => {
    setSignupModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const handleLoginSubmit = () => {
    if ( IsValidUser(email,password) ){
      getUsername(email);
      router.push('/home'); 
    }
  };

  const handleSignupSubmit = () => {
      getUsername(email);
      router.push('/home'); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#19647E] to-[#4ABDAC] flex flex-col items-center justify-center text-white">
      
      <div className="mt-8 mb-4">
        <img 
          src="assets/foundit.png"
          alt="Top Image"
          className="w-[200px] h-[200px] object-contain"
        />
      </div>

      <div className="flex flex-col items-center mb-12 text-center px-4">
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Welcome to FoundIt</h1>
        <p className="text-lg mb-8 max-w-lg animate-fadeIn">
          Your one-stop solution for managing lost and found items. Find your belongings or help others recover theirs!
        </p>
        <div className="flex gap-10 mb-[20px]">
          <button 
            onClick={handleLoginClick}
            className="px-8 py-3 bg-white text-[#19647E] rounded-md font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Login
          </button>
          <button 
            onClick={handleSignupClick}
            className="px-6 py-3 bg-white text-[#19647E] rounded-md font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Sign Up
          </button>
        </div>
        <div> 
          <img 
          src="/assets/paperplanewhite.png"
          alt="Plane Image"
          className="object-contain"
        />
        </div>
        
      </div>

      <footer className="mt-auto p-4 w-full text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} FoundIt. All rights reserved.</p>
      </footer>

      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeLoginModal}
          />

          {/* Modal container */}
          <div className="w-full max-w-md rounded-lg bg-cyan-700 p-8 shadow-lg relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-gray-100 text-3xl font-bold">Login</h2>
              <button
                className="text-white text-xl hover:text-gray-300"
                onClick={closeLoginModal}
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLoginSubmit();
              }}
            >
              <label htmlFor="email" className="block text-gray-200 text-lg font-semibold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="p-2 mb-4 w-full border border-gray-400 text-black rounded-md text-lg focus:outline-none"
                placeholder="Enter your email"
                onChange={(e) => setemail(e.target.value)}
                required
              />

              <label htmlFor="password" className="block text-gray-200  text-lg font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="p-2 mb-4 w-full border border-gray-400 text-black rounded-md text-lg focus:outline-none"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full bg-cyan-800 text-white px-4 py-2 rounded-md hover:bg-cyan-900 mt-4"
              >
                Login
              </button>
            </form>

          </div>
        </div>
      )}

      {isSignupModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeSignupModal}
          />

          {/* Modal container */}
          <div className="w-full max-w-md rounded-lg bg-cyan-700 p-8 shadow-lg relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-gray-100 text-3xl font-bold">Sign Up</h2>
              <button
                className="text-white text-xl hover:text-gray-300"
                onClick={closeSignupModal}
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignupSubmit();
              }}
            >
              <label htmlFor="email" className="block text-gray-200 text-lg font-semibold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="p-2 mb-4 w-full border border-gray-400 text-black rounded-md text-lg focus:outline-none"
                placeholder="Enter your email"
                onChange={(e) => setemail(e.target.value)}
                required
              />

              <label htmlFor="password" className="block text-gray-200  text-lg font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="p-2 mb-4 w-full border border-gray-400 text-black rounded-md text-lg focus:outline-none"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full bg-cyan-800 text-white px-4 py-2 rounded-md hover:bg-cyan-900 mt-4"
              >
                Login
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
