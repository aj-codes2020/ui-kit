import { useState, ReactNode } from 'react';
import './Navbar.css';

interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
  logoTitle?: string;
  centerColumn?: ReactNode;
  rightColumn?: ReactNode;
  menuColumn?: ReactNode;
  className?: string;
}

const Navbar = ({
  logoSrc,
  logoAlt,
  logoTitle = 'AJ.Codes',
  centerColumn,
  rightColumn,
  menuColumn,
  className = '',
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`navbar ${className}`}>
      <div className="logo">
        {logoSrc && <img src={logoSrc} alt={logoAlt} />}
        <h1>{logoTitle}</h1>
      </div>
      <div className="column-center">
        {centerColumn}
      </div>
      <div className="column-right">
        {rightColumn}
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <div className="logo">
            {logoSrc && <img src={logoSrc} alt={logoAlt} />}
            <h1>{logoTitle}</h1>
          </div>
          <button className="close-menu" onClick={toggleMenu}>
            ×
          </button>
        </div>
        <div className="menu-column">
          {menuColumn}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
