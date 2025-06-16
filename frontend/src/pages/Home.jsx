import React, { useEffect, useState } from 'react';
import { Sun, Moon, MessageCircle, ChevronDown, Clock, BookmarkPlus, Flag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme === "true") {
      setIsDarkMode(true);
     
    }
  }, []);

 
  const toggleDarkMode = () => {
    let newMode = !isDarkMode;
    
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
   
  };

  return (
    <div className={`font-sans min-h-screen ${isDarkMode ? 'bg-black' : 'bg-w'}`}>
      <header className="bg-white shadow-md py-4 dark:bg-gray-900 dark:text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">JeeTest</h1>
          <div className="flex space-x-4 items-center">
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={()=>navigate("/auth/login")} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Login
            </button>
            <button onClick={()=>navigate("/auth/signup")} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white">
              Sign Up
            </button>
          </div>
        </div>
      </header>

   
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 dark:from-blue-800 dark:to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prepare Smarter, Score Higher</h2>
          <p className="text-lg mb-8">
            A comprehensive platform to ace your exams with realistic tests, detailed analytics, and personalized feedback.
          </p>
          <button onClick={()=>navigate("/auth/signup")} className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition dark:bg-gray-700 dark:text-white">
            Get Started
          </button>
          <button className="mt-4 inline-flex items-center text-blue-200 hover:text-blue-300 transition">
            Learn More <ChevronDown size={20} className="ml-2" />
          </button>
        </div>
      </section>

    
      <section className="py-16 bg-gray-200 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
            <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-gray-700 dark:text-white">
              <p className="text-gray-600 dark:text-gray-300">
                "JeeTest helped me identify my weak areas and improve significantly!"
              </p>
              <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">- Sarah T.</p>
            </div>
         
            <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-gray-700 dark:text-white">
              <p className="text-gray-600 dark:text-gray-300">
                "The realistic test interface made me feel confident on exam day."
              </p>
              <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">- John D.</p>
            </div>
         
            <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-gray-700 dark:text-white">
              <p className="text-gray-600 dark:text-gray-300">
                "Detailed performance analysis is a game-changer!"
              </p>
              <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Why Choose jeeTest?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   
            <div className="text-center p-6 bg-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white">
              <Clock size={48} className="mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Realistic Test Interface</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience a lifelike exam environment with color-coded question statuses and timers.
              </p>
            </div>
         
            <div className="text-center p-6 bg-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white">
              <BookmarkPlus size={48} className="mx-auto text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Detailed Performance Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get subject-wise insights, time spent, and topic-wise breakdowns with graphs and charts.
              </p>
            </div>
          
            <div className="text-center p-6 bg-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white">
              <Flag size={48} className="mx-auto text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Test History & Bookmarks</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access completed tests, answer keys, and bookmark questions for later review.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-gray-200 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
          
            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">How do I start a test?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simply log in to your account, select a test from the available options, and click "Start."
              </p>
            </div>
        
            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Can I review my performance after the test?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can access detailed performance reports, including subject-wise marks and time spent.
              </p>
            </div>
          
            <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-700 dark:text-white">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Is there a mobile app available?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently, we offer a responsive web platform. A mobile app is planned for future releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy;{(new Date().getFullYear())} JeeTest. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Contact Us
            </a>
          </div>
        </div>
      </footer>

   
      <div className="fixed bottom-6 right-6">
        <button className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default Home;