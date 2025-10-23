import React, { useState, useEffect} from 'react';
import styles from './App.module.css';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import RightSidebar from './components/layout/RightSidebar/RightSidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
import NotificationsPopup from './components/common/NotificationsPopup';
import useWindowSize from './hooks/useWindowSize';

const App = () => {

  const { width } = useWindowSize();
  const isTablet = width <= 1024;
  
  

  const [activePage, setActivePage] = useState('eCommerce');
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [favorites, setFavorites] = useState(['']); 

  useEffect(() => {
    if (isTablet) {
      setIsLeftSidebarOpen(false);
      setIsRightSidebarOpen(false);
    } else {
      setIsLeftSidebarOpen(true);
      setIsRightSidebarOpen(true);
    }
  }, [isTablet]);

  const toggleFavorite = (pageId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(pageId)) {
        return prevFavorites.filter((fav) => fav !== pageId);
      } else {
        return [...prevFavorites, pageId];
      }
    });
  };
  const toggleRightSidebar = () => setIsRightSidebarOpen(prevState => !prevState);
  const toggleLeftSidebar = () => setIsLeftSidebarOpen(prevState => !prevState);

  return (
    <div className={styles.appContainer}>
      <NotificationsPopup 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
      />
      
      <Sidebar 
        isOpen={isLeftSidebarOpen}
        toggleSidebar={toggleLeftSidebar}
        activePage={activePage} 
        setActivePage={setActivePage}
        favorites={favorites} // Pass the list of favorites
      />

      <div className={styles.contentWrapper}>
        <Header 
          activePage={activePage} 
          toggleRightSidebar={toggleRightSidebar}
          toggleLeftSidebar={toggleLeftSidebar}
          favorites={favorites} // Pass the list
          toggleFavorite={toggleFavorite} // Pass the function
          openNotifications={() => setIsNotificationsOpen(true)}
        />
        <main className={styles.mainContent}>
          {activePage === 'eCommerce' && <Dashboard />}
          {activePage === 'Projects' && <Orders />}
        </main>
      </div>
      
      {(activePage === 'eCommerce' || activePage === 'Projects') && <RightSidebar 
            isOpen={isRightSidebarOpen} 
            toggleSidebar={toggleRightSidebar}
        />}
    </div>
  );
};

export default App;