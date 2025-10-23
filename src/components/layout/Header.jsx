import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Header.module.css';
import { FiSearch, FiSun, FiMoon, FiBell, FiLayout, FiStar, FiClock, FiGrid } from 'react-icons/fi';

const Header = ({ activePage }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      {/* Left side: Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <FiLayout className={styles.breadcrumbIcon} />
        <FiStar className={styles.breadcrumbIcon} />
        <span className={styles.breadcrumbText}>Dashboards</span>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbActive}>{activePage}</span>
      </div>

      {/* Right side: Actions */}
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
        <button className={styles.actionButton}>
          <FiBell />
        </button>
        <button className={styles.actionButton}>
          <FiGrid />
        </button>
      </div>
    </header>
  );
};

export default Header;