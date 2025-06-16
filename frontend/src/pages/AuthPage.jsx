import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import axios from "axios"
import {toast} from "react-hot-toast"
const AuthPage = () => {
  const navigate = useNavigate();
  const { mode } = useParams(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLogin = mode !== 'signup';

  const handleAuth = async() => {
    if (isLogin) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/auth/login`,
          {email, password},
          { withCredentials: true }
        );
        if(response?.data?.success){
          sessionStorage.setItem("userData" , JSON.stringify(response?.data?.userData));
          toast.success(response.data.message)
          navigate('/user/dashboard');
        }
      } catch (error) {
        toast.error(error.response.data.message)
        console.error(error)
      }
      
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/auth/register`,
          {email, password},
          { withCredentials: true }
        );
        if(response?.data?.success){
          sessionStorage.setItem("userData" , JSON.stringify(response?.data?.userData));
          toast.success(response.data.message)
          navigate('/user/dashboard');
        }
        
      } catch (error) {
        console.error(error)
        toast.error(error.response.data.message)
      }
     
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-900 shadow-lg rounded-xl text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h2>
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 pl-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-3 text-gray-500" size={20} />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 pl-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAuth}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </motion.button>
        <button 
          onClick={() => navigate(isLogin ? '/auth/signup' : '/auth/login')} 
          className="mt-4 text-blue-600 dark:text-blue-400 hover:underline transition"
        >
          {isLogin ? 'Need an account? Sign up' : 'Have an account? Login'}
        </button>
      </motion.div>
    </div>
  );
};

export default AuthPage;
