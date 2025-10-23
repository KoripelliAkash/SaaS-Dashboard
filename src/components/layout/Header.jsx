import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Header.module.css';
import { FiSearch, FiSun, FiMoon, FiBell, FiLayout, FiStar, FiClock, FiGrid } from 'react-icons/fi';

const Header = ({ activePage, toggleRightSidebar, toggleLeftSidebar, favorites, toggleFavorite, openNotifications }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Check if the current page is in the favorites array
  const isFavorite = favorites.includes(activePage);

  return (
    <header className={styles.header}>
      <div className={styles.breadcrumbs}>
        <button className={styles.breadcrumbButton} onClick={toggleLeftSidebar}>
          <FiLayout className={styles.breadcrumbIcon} />
        </button>

        <button className={styles.breadcrumbButton} onClick={() => toggleFavorite(activePage)}>
          {/* Conditionally apply the .favoriteActive class */}
          <FiStar className={`${styles.breadcrumbIcon} ${isFavorite ? styles.favoriteActive : ''}`} />
        </button>

        <span className={styles.breadcrumbText}>Dashboards</span>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbActive}>{activePage}</span>
      </div>

      <div className={styles.headerActions}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search..." />
        </div>
        <button className={styles.actionButton} onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <button className={styles.actionButton}>
          <FiClock />
        </button>
        <button className={styles.actionButton} onClick={openNotifications}>
          <FiBell />
        </button>
        <button className={styles.actionButton} onClick={toggleRightSidebar}>
          <FiGrid />
        </button>
      </div>
    </header>
  );
};

export default Header;