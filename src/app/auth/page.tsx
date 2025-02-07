'use client';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const Page = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Main Card */}
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${isLogin
              ? 'bg-gray-900 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 border border-gray-300'
              }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${!isLogin
              ? 'bg-gray-900 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 border border-gray-300'
              }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Dynamic Form */}
        {isLogin ? (
          // Login Form
          <div>
            <h1 className="text-xl font-bold text-gray-800 text-center mb-3">Welcome Back!</h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all"
              >
                Log In
              </button>
            </form>
            <div className="flex justify-between mt-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700">Forgot Password?</a>
              <a href="#" className="hover:text-gray-700">Create an Account</a>
            </div>
          </div>
        ) : (
          // Sign Up Form
          <div>
            <h1 className="text-xl font-bold text-gray-800 text-center mb-3">Create Your Account</h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all"
              >
                Sign Up
              </button>
            </form>
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center justify-between my-6">
          <span className="border-b w-1/4 border-gray-200"></span>
          <p className="text-sm text-gray-500">OR</p>
          <span className="border-b w-1/4 border-gray-200"></span>
        </div>

        {/* Google Button */}
        <button
          className="w-full py-2 flex items-center justify-center border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 transition-all"
        >
          <FaGoogle className="text-gray-600 mr-3" size={20} />
          <span className="text-sm text-gray-700">
            {isLogin ? 'Log in with Google' : 'Sign up with Google'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Page;