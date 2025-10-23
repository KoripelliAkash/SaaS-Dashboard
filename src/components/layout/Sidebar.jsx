import React from 'react';
import styles from './Sidebar.module.css';
import {
  FiHome, FiLayers, FiGrid, FiShoppingCart, FiBookOpen,
  FiFileText, FiUsers, FiTarget, FiFile, FiUser, FiBriefcase,
  FiEdit3, FiShare2, FiStar, FiClock, FiX
} from 'react-icons/fi';

import logoImage from '../../assets/logo.jpg';

const pageMap = {
  'eCommerce': { name: 'eCommerce', icon: <FiShoppingCart /> },
  'Projects': { name: 'Projects', icon: <FiLayers /> },
};

const sidebarSections = [
  {
    title: 'Dashboards',
    items: [
      { name: 'Default', icon: <FiGrid />, page: 'Default' },
      { name: 'eCommerce', icon: <FiShoppingCart />, page: 'eCommerce' },
      { name: 'Projects', icon: <FiLayers />, page: 'Projects' },
      { name: 'Online Courses', icon: <FiBookOpen />, page: 'Online Courses' },
    ],
  },
  {
    title: 'Pages',
    items: [
      { name: 'User Profile', icon: <FiUser />, page: 'UserProfile' },
      { name: 'Overview', icon: <FiHome />, page: 'PageOverview', isSubItem: true },
      { name: 'Projects', icon: <FiLayers />, page: 'PageProjects', isSubItem: true },
      { name: 'Campaigns', icon: <FiTarget />, page: 'Campaigns', isSubItem: true },
      { name: 'Documents', icon: <FiFile />, page: 'Documents', isSubItem: true },
      { name: 'Followers', icon: <FiUsers />, page: 'Followers', isSubItem: true },
    ],
  },
  {
    title: 'Account',
    items: [{ name: 'Account', icon: <FiUser />, page: 'Account' }],
  },
  {
    title: 'Corporate',
    items: [{ name: 'Corporate', icon: <FiBriefcase />, page: 'Corporate' }],
  },
  {
    title: 'Blog',
    items: [{ name: 'Blog', icon: <FiEdit3 />, page: 'Blog' }],
  },
  {
    title: 'Social',
    items: [{ name: 'Social', icon: <FiShare2 />, page: 'Social' }],
  },
];

const Sidebar = ({ isOpen, toggleSidebar, activePage, setActivePage, favorites }) => {
  const sidebarClasses = `${styles.sidebar} ${isOpen ? '' : styles.closed}`;

  return (
    <aside className={sidebarClasses}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logoImage} alt="Logo" className={styles.logoImage} />
          <h3>Byewind</h3>
        </div>
        <button className={styles.closeButton} onClick={toggleSidebar}>
          <FiX />
        </button>
      </div>
      
      <div className={styles.topLinks}>
        <div className={styles.topLinkItem}>
          <FiStar />
          <span>Favorites</span>
        </div>
        <div className={styles.topLinkItem}>
          <FiClock />
          <span>Recently</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navSection}>
          <p className={styles.navTitle}>Favorites</p>
          <ul>
            {favorites.map((favId) => {
              const page = pageMap[favId];
              if (!page) return null;
              return (
                <li
                  key={page.name}
                  className={`${styles.navItem} ${activePage === favId ? styles.active : ''}`}
                  onClick={() => setActivePage(favId)}
                >
                  {page.icon}
                  <span>{page.name}</span>
                </li>
              );
            })}
            {favorites.length === 0 && (
              <li className={styles.noFavorites}>No favorites yet.</li>
            )}
          </ul>
        </div>
        
        {sidebarSections.map((section) => (
          <div key={section.title} className={styles.navSection}>
            <p className={styles.navTitle}>{section.title}</p>
            <ul>
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className={`
                    ${styles.navItem} 
                    ${item.isSubItem ? styles.subItem : ''}
                    ${activePage === item.page ? styles.active : ''}
                  `}
                  onClick={() => setActivePage(item.page)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;