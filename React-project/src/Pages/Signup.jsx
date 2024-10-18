// src/SignUpForm.js
import  { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up 
    console.log('Form submitted:', { name, email, password });
  };

  return (
 
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-3xl font-[300] mb-6 text-center">Sign Up</h2>
        
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
          />
        </div>
        
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
          <p className='pt-4'>Already have an account? <Link to={"/signIn"} className='text-blue-700'>Sign-In</Link> </p>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Sign Up
        </button>
      </form>
    </div>

  );
};

export default Signup;
