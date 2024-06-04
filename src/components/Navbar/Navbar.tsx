import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './Navbar.css';

interface NavbarLink {
  label: string;
  href: string;
  content: React.ReactNode;
}

interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
  logoTitle?: string;
  centerColumn?: NavbarLink[];
  rightColumn?: NavbarLink[];
  menuColumn?: NavbarLink[];
  className?: string;
}

const Navbar = ({
  logoSrc,
  logoAlt,
  logoTitle = 'AJ.Codes',
  centerColumn = [],
  rightColumn = [],
  menuColumn = [],
  className = '',
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <header className={`navbar ${className}`}>
        <div className="logo">
          {logoSrc && <img src={logoSrc} alt={logoAlt} />}
          <h1>{logoTitle}</h1>
        </div>
        <div className="column-center">
          {centerColumn.map((link, index) => (
            <NavLink key={index} to={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="column-right">
          {rightColumn.map((link, index) => (
            <NavLink key={index} to={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </header>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <div className="logo">
            {logoSrc && <img src={logoSrc} alt={logoAlt} />}
            <h1>{logoTitle}</h1>
          </div>
          <button className="close-menu" onClick={toggleMenu}>×</button>
        </div>
        <div className="menu-column">
          {menuColumn.map((link, index) => (
            <NavLink key={index} to={link.href} onClick={toggleMenu}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
      <Routes>
        {centerColumn.concat(rightColumn, menuColumn).map((link, index) => (
          <Route key={index} path={link.href} element={link.content} />
        ))}
      </Routes>
    </Router>
  );
};

export default Navbar;
