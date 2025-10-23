import React, { useRef } from 'react';
import styles from './NotificationsPopup.module.css';
import useOnClickOutside from '../../hooks/useOnClickOutside'; 
import { FiAlertCircle, FiUserPlus, FiMessageSquare } from 'react-icons/fi';

const NotificationsPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef();
  
  useOnClickOutside(popupRef, onClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.popup} ref={popupRef}>
        <h4 className={styles.title}>Notifications</h4>
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
            <FiMessageSquare className={styles.icon} />
            <div>
              <p className={styles.notificationText}>Andi Lane subscribed to you</p>
              <span className={styles.notificationTime}>Today, 11:59 AM</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationsPopup;