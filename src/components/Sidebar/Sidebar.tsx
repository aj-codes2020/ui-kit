import { useState, useEffect, ReactNode } from 'react';
import './Sidebar.css';

interface SidebarProps {
  sidebarTitle?: string;
  sidebarLinks: ReactNode;
  headerContent?: ReactNode;
  className?: string;
}

const Sidebar = ({
  sidebarTitle = 'Sidebar',
  sidebarLinks,
  headerContent,
  className = '',
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
          {sidebarTitle}
          <button className="close-menu" onClick={toggleSidebar}>
            <div className="cross">x</div>
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
        <main>
          {/* Add your main content here */}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
