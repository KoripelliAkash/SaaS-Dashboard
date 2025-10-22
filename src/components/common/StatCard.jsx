import React from 'react';
import styles from './StatCard.module.css';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const StatCard = ({ title, value, percentage, isPositive }) => {
  const percentageClass = isPositive ? styles.positive : styles.negative;
  
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles.valueContainer}>
        <h2 className={styles.value}>{value}</h2>
        <span className={`${styles.percentage} ${percentageClass}`}>
          {isPositive ? <FiArrowUp /> : <FiArrowDown />}
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default StatCard;