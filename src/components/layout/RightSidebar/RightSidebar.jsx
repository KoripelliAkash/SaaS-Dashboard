import React from 'react';
import styles from './RightSidebar.module.css';
import { FiAlertCircle, FiUserPlus, FiMessageSquare, FiUploadCloud, FiEdit3, FiTrash2, FiBell, FiX } from 'react-icons/fi';

const RightSidebar = ({ isOpen, toggleSidebar }) => {
  const contacts = [
    { name: 'Natali Craig', avatar: '/src/assets/avatar-1.jpg' },
    { name: 'Drew Cano', avatar: '/src/assets/avatar-3.jpg' },
    { name: 'Orlando Diggs', avatar: '/src/assets/avatar-4.jpg' },
    { name: 'Andi Lane', avatar: '/src/assets/avatar-5.jpg' },
    { name: 'Kate Morrison', avatar: '/src/assets/avatar-2.jpg' },
    { name: 'Koray Okumus', avatar: '/src/assets/avatar-6.jpg' },
  ];
  const sidebarClasses = `${styles.rightSidebar} ${isOpen ? '' : styles.closed}`;

  return (
    <aside className={sidebarClasses}>
      

      <div className={styles.content}>
        {/* Notifications Section */}
        <section className={styles.section}>
          <div className={styles.header}>
            <h4 className={styles.sectionTitle}>Notifications</h4>
        <button className={styles.closeButton} onClick={toggleSidebar}>
          <FiX />
        </button>
          </div>
          <ul className={styles.notificationList}>
            <li className={styles.notificationItem}>
              <FiAlertCircle className={styles.icon} />
              <div>
                <p className={styles.notificationText}>You have a bug that needs...</p>
                <span className={styles.notificationTime}>Just now</span>
              </div>
            </li>
            <li className={styles.notificationItem}>
              <FiUserPlus className={styles.icon} />
              <div>
                <p className={styles.notificationText}>New user registered</p>
                <span className={styles.notificationTime}>59 minutes ago</span>
              </div>
            </li>
            <li className={styles.notificationItem}>
              <FiAlertCircle className={styles.icon} />
              <div>
                <p className={styles.notificationText}>You have a bug that needs...</p>
                <span className={styles.notificationTime}>12 hours ago</span>
              </div>
            </li>
            <li className={styles.notificationItem}>
              <FiMessageSquare className={styles.icon} />
              <div>
                <p className={styles.notificationText}>Andi Lane subscribed to you</p>
                <span className={styles.notificationTime}>Today, 11:59 AM</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Activities Section */}
        <section className={styles.section}>
          <h4 className={styles.sectionTitle}>Activities</h4>
          {/* --- Activity list is fully restored below --- */}
          <ul className={styles.activityList}>
            <li className={styles.activityItem}>
              <div className={`${styles.activityIconWrapper} ${styles.bug}`}>
                  <FiAlertCircle className={styles.activityIcon} />
              </div>
              <div>
                  <p className={styles.activityText}>You have a bug that needs...</p>
                  <span className={styles.activityTime}>Just now</span>
              </div>
            </li>
            <li className={styles.activityItem}>
              <div className={`${styles.activityIconWrapper} ${styles.release}`}>
                  <FiUploadCloud className={styles.activityIcon} />
              </div>
              <div>
                  <p className={styles.activityText}>Released a new version</p>
                  <span className={styles.activityTime}>59 minutes ago</span>
              </div>
            </li>
            <li className={styles.activityItem}>
              <div className={`${styles.activityIconWrapper} ${styles.submit}`}>
                  <FiBell className={styles.activityIcon} />
              </div>
              <div>
                  <p className={styles.activityText}>Submitted a bug</p>
                  <span className={styles.activityTime}>12 hours ago</span>
              </div>
            </li>
            <li className={styles.activityItem}>
              <div className={`${styles.activityIconWrapper} ${styles.modified}`}>
                  <FiEdit3 className={styles.activityIcon} />
              </div>
              <div>
                  <p className={styles.activityText}>Modified a data in Page X</p>
                  <span className={styles.activityTime}>Today, 11:59 AM</span>
              </div>
            </li>
            <li className={styles.activityItem}>
              <div className={`${styles.activityIconWrapper} ${styles.deleted}`}>
                  <FiTrash2 className={styles.activityIcon} />
              </div>
              <div>
                  <p className={styles.activityText}>Deleted a page in Project X</p>
                  <span className={styles.activityTime}>Feb 2, 2023</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Contacts Section */}
        <section className={styles.section}>
          <h4 className={styles.sectionTitle}>Contacts</h4>
          <ul className={styles.contactList}>
            {contacts.map((contact, index) => (
              <li key={index} className={styles.contactItem}>
                <img src={contact.avatar} alt={contact.name} className={styles.contactAvatar} />
                <span className={styles.contactName}>{contact.name}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
};

export default RightSidebar;