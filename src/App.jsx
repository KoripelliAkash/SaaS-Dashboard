import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
import styles from './App.module.css'; // Create this CSS file

const App = () => {
  // Simple state to simulate routing
  const [activePage, setActivePage] = useState('eCommerce'); 

  return (
    <div className={styles.appContainer}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className={styles.mainContent}>
        <Header />
        {/* Conditional rendering based on active page state */}
        {activePage === 'eCommerce' && <Dashboard />}
        {activePage === 'Projects' && <Orders />}
      </main>
    </div>
  );
};

export default App;