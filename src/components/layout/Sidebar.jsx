import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Sidebar.module.css';
import { FiHome, FiBarChart2, FiLayers, FiUser, FiBriefcase, FiFileText, FiMessageSquare, FiSettings } from 'react-icons/fi';

// In a real app, you'd fetch this from an API or config
const navItems = [
  { name: 'Default', icon: <FiHome />, page: 'Default' },
  { name: 'eCommerce', icon: <FiBarChart2 />, page: 'eCommerce' },
  { name: 'Projects', icon: <FiLayers />, page: 'Projects' },
  // ... add other items
];

const Sidebar = ({ activePage, setActivePage }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        {/* You can use an SVG or text for the logo */}
        <h3>Byewind</h3>
      </div>
      <nav className={styles.nav}>
        <p className={styles.navTitle}>Dashboards</p>
        <ul>
          {navItems.map(item => (
            <li
              key={item.name}
              className={`${styles.navItem} ${activePage === item.page ? styles.active : ''}`}
              onClick={() => setActivePage(item.page)}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
      {/* Add other nav sections like "Pages", "Account", etc. */}
    </aside>
  );
};

export default Sidebar;