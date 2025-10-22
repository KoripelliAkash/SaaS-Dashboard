import React from 'react';
import styles from './Orders.module.css';
import OrderTable from '../../components/orders/OrderTable';

const Orders = () => {
  return (
    <div className={styles.ordersContainer}>
      <h2 className={styles.pageTitle}>Order List</h2>
      <OrderTable />
    </div>
  );
};

export default Orders;