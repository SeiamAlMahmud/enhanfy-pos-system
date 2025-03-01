"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Loader from '../Loaders/page';
import { useUser } from '../(dashboard)/context/UserContext';


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useUser();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset any previous error messages
    setLoading(true);

    try {
      const response = await fetch('/Login/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('Login successful:', userData);
        
        // Pass full user data (including role) to the login function in UserProvider
        login(userData); 
        router.push('/home');
         // Redirect to the home page
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Display error message
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
    finally {
      setLoading(false); // Set loading to false when the request is done
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: "url('https://r4.wallpaperflare.com/wallpaper/184/515/626/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-98166df8f0901cc8c09ce13e08c2c4ca.jpg')" }}>
      <div className="p-6 max-w-md w-full py-[8%] px-[2%] bg-opacity-30  backdrop-blur-sm rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white bg-opacity-10 rounded text-black placeholder-gray-200 outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative items-center">
            <label className="block text-black text-sm font-semibold mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white bg-opacity-10 rounded text-black placeholder-gray-200 outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-12 transform -translate-y-1/2 text-black"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {loading ? (
        <button type="button" disabled className="loading-button">
          <Loader/>
        </button>
      ) : (
          <button
            type="submit"
            className="w-full bg-indigo-500 text-black font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-600 transition duration-200"
          >
            Login
          </button>
          )}
        </form>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
}
