import React from 'react';
import styles from './Sidebar.module.css';
import {
  FiHome, FiLayers, FiGrid, FiShoppingCart, FiBookOpen,
  FiFileText, FiUsers, FiTarget, FiFile, FiUser, FiBriefcase,
  FiEdit3, FiShare2, FiStar, FiClock
} from 'react-icons/fi';

// New, detailed data structure for the sidebar
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

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h3>Byewind</h3>
      </div>
      
      {/* Top Links */}
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