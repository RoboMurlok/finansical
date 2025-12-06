import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import  data  from '../../data/data.json'

export default function Navbar({...props}) {
  
    const activePage = ({ isActive }) => (isActive ? "active" : "");
  return (
    <nav {...props}>
      {data.navlink.map((item, index) => (
        <NavLink key={index} className={activePage} to={item.url}>
          {item.label || item.name}
        </NavLink>
      ))}
    </nav>
  );
}


