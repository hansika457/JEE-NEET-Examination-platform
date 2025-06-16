import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const upcomingTests = [
    { id: 1, title: "JEE Advanced Mock Test", date: "20 Feb 2025" },
    { id: 2, title: "NEET Biology Full Test", date: "22 Feb 2025" },
    { id: 3, title: "JEE Mains Mathematics", date: "25 Feb 2025" },
    { id: 4, title: "NEET Chemistry Practice", date: "28 Feb 2025" },
  ];
  
  const Upcoming = () => {
    const navigate = useNavigate();
    return (
      <div className="min-h-screen p-6 bg-white text-black">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Tests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingTests.map((test) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: test.id * 0.1 }}
              className="p-5 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold">{test.title}</h3>
              <p className="text-sm text-gray-400">{test.date}</p>
              <button
                onClick={() => navigate("/test")}
                className="mt-4 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

export default Upcoming