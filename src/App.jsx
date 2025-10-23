import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import RightSidebar from './components/layout/RightSidebar/RightSidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
import styles from './App.module.css';

const App = () => {
  const [activePage, setActivePage] = useState('eCommerce');
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(prevState => !prevState);
  };
  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(prevState => !prevState);
  };

  return (
    <div className={styles.appContainer}>
      <Sidebar 
        isOpen={isLeftSidebarOpen} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />
      <div className={styles.contentWrapper}>
        <Header 
          activePage={activePage} 
          toggleRightSidebar={toggleRightSidebar}
          toggleLeftSidebar={toggleLeftSidebar}
        />
        <main className={styles.mainContent}>
          {activePage === 'eCommerce' && <Dashboard />}
          {activePage === 'Projects' && <Orders />}
        </main>
      </div>
      
      {(activePage === 'eCommerce' || activePage === 'Projects') && <RightSidebar isOpen={isRightSidebarOpen} />}
    </div>
  );
};

export default App;