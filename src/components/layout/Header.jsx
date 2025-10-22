import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Header.module.css';
import { FiSearch, FiSun, FiMoon, FiBell } from 'react-icons/fi';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <FiSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.headerActions}>
        <button className={styles.actionButton} onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <button className={styles.actionButton}>
          <FiBell />
        </button>
        <div className={styles.profile}>
            {/* Add user profile image here */}
        </div>
      </div>
    </header>
  );
};

export default Header;