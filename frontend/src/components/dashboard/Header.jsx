import { Bookmark, Clock, FileText, Home, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const NavItem = ({ icon, label, path }) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition"
          onClick={() => {
              navigate(path);
              setMenuOpen(false);
          }}
        >
          {icon}
          <span>{label}</span>
        </motion.div>
    );

    return (
        <header className="flex items-center justify-between p-4 text-blue-700 font-semibold bg-gray-50 shadow-md">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="md:hidden">
                <Menu size={24} onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
            </div>
            <nav className={`flex space-x-6 md:flex ${menuOpen ? 'flex flex-col absolute top-16 right-4 bg-white p-4 shadow-lg rounded-lg' : 'hidden md:flex'}`}>
                <NavItem icon={<Home size={20} />} label="Home" path="dashboard" />
                <NavItem icon={<Clock size={20} />} label="History" path="history" />
                <NavItem icon={<FileText size={20} />} label="Upcoming Tests" path="upcoming" />
                <NavItem icon={<Bookmark size={20} />} label="Bookmarked Questions" path="bookmarks" />
            </nav>
        </header>
    );
};

export default Header;
