import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import RightSidebar from './components/layout/RightSidebar/RightSidebar'; // Import the new component
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
import styles from './App.module.css';

const App = () => {
  const [activePage, setActivePage] = useState('eCommerce');

  return (
    <div className={styles.appContainer}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className={styles.contentWrapper}> {/* New wrapper for main content + header */}
        <Header />
        <main className={styles.mainContent}>
          {activePage === 'eCommerce' && <Dashboard />}
          {activePage === 'Projects' && <Orders />}
        </main>
      </div>
      {activePage === 'eCommerce' && <RightSidebar />} {/* Rendered only if activePage is 'eCommerce' */}
    </div>
  );
};

export default App;