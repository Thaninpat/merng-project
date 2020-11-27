import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../SidebarData';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => setClicked(!clicked);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className='NavbarItems'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <h1 className='navbar-logo'>
          React <i className='fab fa-react'> </i>
        </h1>
        <div className='menu-icon' onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
