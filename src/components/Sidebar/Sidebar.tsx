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
  collapseWidth?: number; // New prop
}

const Sidebar = ({
  logoSrc,
  logoAlt,
  sidebarTitle = '',
  sidebarLinks,
  headerContent,
  className = '',
  children,
  collapseWidth = 768, // Default value for new prop
}: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= collapseWidth) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= collapseWidth) {
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
  }, [collapseWidth]);

  return (
    <div className={`sidebar-layout ${className}`}>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-title">
          <div className="sidebar-logo">
            {logoSrc && <img src={logoSrc} alt={logoAlt} />}
            {sidebarTitle}
          </div>
          <button className="close-menu" onClick={toggleSidebar}>
            ×
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul onClick={handleLinkClick}>{sidebarLinks}</ul>
        </nav>
      </aside>

      <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
        <header className={`header ${isSidebarOpen ? '' : 'full-width'}`}>
          <button className="hamburger-menu" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="header-content">{headerContent}</div>
        </header>
        <main className="body-container">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
