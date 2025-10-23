import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import RightSidebar from './components/layout/RightSidebar/RightSidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
import styles from './App.module.css';

const App = () => {
  const [activePage, setActivePage] = useState('eCommerce');
  // 1. Add state for the right sidebar visibility
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

  // 2. Create a function to toggle the state
  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={styles.appContainer}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className={styles.contentWrapper}>
        {/* 3. Pass the toggle function to the Header */}
        <Header activePage={activePage} toggleRightSidebar={toggleRightSidebar} />
        <main className={styles.mainContent}>
          {activePage === 'eCommerce' && <Dashboard />}
          {activePage === 'Projects' && <Orders />}
        </main>
      </div>
      
      {/* 4. Conditionally render the sidebar based on activePage, and pass the open state to it */}
      {activePage === 'eCommerce' && <RightSidebar isOpen={isRightSidebarOpen} />}
    </div>
  );
};

export default App;