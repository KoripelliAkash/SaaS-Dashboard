import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext'; // <-- Make sure this is imported
import styles from './Header.module.css';
import { FiSearch, FiSun, FiMoon, FiBell, FiLayout, FiStar, FiClock, FiGrid } from 'react-icons/fi';

const Header = ({ activePage, toggleRightSidebar, toggleLeftSidebar }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.breadcrumbs}>
        <button className={styles.breadcrumbButton} onClick={toggleLeftSidebar}>
          <FiLayout className={styles.breadcrumbIcon} />
        </button>
        <FiStar className={styles.breadcrumbIcon} />
        <span className={styles.breadcrumbText}>Dashboards</span>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbActive}>{activePage}</span>
      </div>

      <div className={styles.headerActions}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search..." />
        </div>

        

        {/* --- This button was missing --- */}
        <button className={styles.actionButton} onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        {/* ------------------------------ */}

        <button className={styles.actionButton}>
          <FiClock />
        </button>
        <button className={styles.actionButton}>
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