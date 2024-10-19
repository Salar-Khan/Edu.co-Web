
import  { useState } from 'react';
import React from 'react';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in 
    console.log('Sign-in submitted:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-4xl font-[300] mb-6 text-center">Sign In</h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Password"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
