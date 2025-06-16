import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const tests = [
  { id: 1, title: "JEE Advanced Mock Test", subject: "Physics", duration: "3h", date: "20 Feb 2025" },
  { id: 2, title: "NEET Biology Full Test", subject: "Biology", duration: "2.5h", date: "22 Feb 2025" },
  { id: 3, title: "JEE Mains Mathematics", subject: "Math", duration: "3h", date: "25 Feb 2025" },
  { id: 4, title: "NEET Chemistry Practice", subject: "Chemistry", duration: "2h", date: "28 Feb 2025" },
];

const Dashboard = () => {
    const navigate =useNavigate()
  return (
    <div className="h-full flex flex-col bg-white text-black">
    
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Available Tests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: test.id * 0.1 }}
              className="p-5 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold">{test.title}</h3>
              <p className="text-sm text-gray-400">{test.subject}</p>
              <div className="flex justify-between mt-2">
                <span className="text-sm">{test.duration}</span>
                <span className="text-sm">{test.date}</span>
              </div>
              <button onClick={()=>navigate("/test")} className="mt-4 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition">
                Start Test
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="p-4 text-center bg-white mt-6 shadow-md">
        <p className="text-sm text-gray-500">
          © 2025 NSS IIT Roorkee - JEE/NEET Test Platform
        </p>
        </footer>
    </div>
  );
};



export default Dashboard;
