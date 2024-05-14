import React from 'react';
import './Navbar.css';
import navlogo from '../../Assets/auzailogo1.png';
import { FiArrowUpRight } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <img src={navlogo} alt="" className="navlogo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Guides</li>
          <li>Team</li>
          <li>Contact us</li>
        </ul>
        <button className="btn1">try AuzAI<FiArrowUpRight /></button>
        <div className="search-container">
          <input type="text" id="searchInput" name="query" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <button className="btn2">login</button>
      </div>
    </nav>
  );
};

export default Navbar;
