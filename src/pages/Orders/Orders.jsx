import React, { useState } from 'react';
import styles from './Orders.module.css';
import OrderTable from '../../components/orders/OrderTable';
import Pagination from '../../components/common/Pagination'; 
import { FiPlus, FiFilter, FiSearch } from 'react-icons/fi';
import { FaSort } from 'react-icons/fa';

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className={styles.ordersContainer}>
      <h2 className={styles.pageTitle}>Order List</h2>
      
      <div className={styles.toolbar}>
        <div className={styles.toolbarActions}>
          <button className={styles.actionButton}><FiPlus /></button>
          <button className={styles.actionButton}><FiFilter /></button>
          <button className={styles.actionButton}><FaSort /></button>
        </div>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <OrderTable currentPage={currentPage} />
      
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Orders;