import React from 'react';
import styles from './StatCard.module.css';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi'; 

const StatCard = ({ title, value, percentage, isPositive }) => {
  const percentageClass = isPositive ? styles.positive : styles.negative;
  
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <h2 className={styles.value}>{value}</h2>
      <div className={styles.footer}>
        <span className={`${styles.percentage} ${percentageClass}`}>
          {isPositive ? <FiTrendingUp /> : <FiTrendingDown />}
          {percentage}%
        </span>
        <FiTrendingUp className={styles.chartIcon} /> {}
      </div>
    </div>
  );
};

export default StatCard;