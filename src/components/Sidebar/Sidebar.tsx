import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
  sidebarTitle?: string;
  sidebarLinks: { label: string, href: string, content: React.ReactNode }[];
  headerContent?: React.ReactNode;
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
    <Router>
      <div className={`sidebar-layout ${className}`}>
        <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-title">
            {sidebarTitle}
            <button className="close-menu" onClick={toggleSidebar}>
                <div className='cross'>x</div>
            </button>
          </div>
          <nav className="sidebar-nav">
            <ul>
              {sidebarLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="main-content">
          <header className="header">
            <button className="hamburger-menu" onClick={toggleSidebar}>☰</button>
            <div className="header-content">
              <div>{headerContent}</div>
            </div>
          </header>
          <main>
            <Routes>
              {sidebarLinks.map((link, index) => (
                <Route key={index} path={link.href} element={
                  <div className='body-container'>
                    <h1 className='body-title'>{link.label}</h1>
                    {link.content}
                  </div>
                } />
              ))}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
