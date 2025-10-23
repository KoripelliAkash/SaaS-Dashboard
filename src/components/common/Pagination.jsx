import React from 'react';
import styles from './Pagination.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.pagination}>
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className={styles.arrowButton}
      >
        <FiChevronLeft />
      </button>
      <ul className={styles.pageList}>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`${styles.pageButton} ${currentPage === number ? styles.active : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className={styles.arrowButton}
      >
        <FiChevronRight />
      </button>
    </nav>
  );
};

export default Pagination;