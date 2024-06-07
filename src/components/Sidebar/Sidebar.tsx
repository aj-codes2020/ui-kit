import { useState, useEffect, ReactNode } from 'react';
import './Sidebar.css';

interface SidebarProps {
  logoSrc?: string;
  logoAlt?: string;
  sidebarTitle?: string;
  sidebarLinks: ReactNode;
  headerContent?: ReactNode;
  className?: string;
  children: ReactNode;
}

const Sidebar = ({
  logoSrc,
  logoAlt,
  sidebarTitle = '',
  sidebarLinks,
  headerContent,
  className = '',
  children
}: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`sidebar-layout ${className}`}>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-title">
          <div className='sidebar-logo'>
            {logoSrc && <img src={logoSrc} alt={logoAlt} />}
            {sidebarTitle}
          </div>
          <button className="close-menu" onClick={toggleSidebar}>
            ×
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul onClick={handleLinkClick}>
            {sidebarLinks}
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="header">
          <button className="hamburger-menu" onClick={toggleSidebar}>☰</button>
          <div className="header-content">
            {headerContent}
          </div>
        </header>
        <main className="body-container">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
