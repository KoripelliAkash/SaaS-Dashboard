import React, { useState } from 'react';
import styles from './Orders.module.css';
import OrderTable from '../../components/orders/OrderTable';
import Pagination from '../../components/common/Pagination'; 
import { FiPlus, FiFilter, FiSearch } from 'react-icons/fi';
import { FaSort } from 'react-icons/fa';

// 1. All data now lives in the parent component.
const allOrders = [
  { id: '#CM9801', user: 'Natali Craig', avatar: '/src/assets/avatar-1.png', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM9802', user: 'Kate Morrison', avatar: '/src/assets/avatar-2.png', project: 'CRM Admin pages', address: 'Lorry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM9803', user: 'Drew Cano', avatar: '/src/assets/avatar-3.png', project: 'Client Project', address: 'Bogwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM9804', user: 'Orlando Diggs', avatar: '/src/assets/avatar-4.png', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM9805', user: 'Andi Lane', avatar: '/src/assets/avatar-5.png', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  { id: '#CM98011', user: 'Natali Craig', avatar: '/src/assets/avatar-1.png', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM98022', user: 'Kate Morrison', avatar: '/src/assets/avatar-2.png', project: 'CRM Admin pages', address: 'Lorry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM98033', user: 'Drew Cano', avatar: '/src/assets/avatar-3.png', project: 'Client Project', address: 'Bogwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM98044', user: 'Orlando Diggs', avatar: '/src/assets/avatar-4.png', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM98055', user: 'Andi Lane', avatar: '/src/assets/avatar-5.png', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  { id: '#CM98012', user: 'Natali Craig', avatar: '/src/assets/avatar-1.png', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM98023', user: 'Kate Morrison', avatar: '/src/assets/avatar-2.png', project: 'CRM Admin pages', address: 'Lorry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM98034', user: 'Drew Cano', avatar: '/src/assets/avatar-3.png', project: 'Client Project', address: 'Bogwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM98045', user: 'Orlando Diggs', avatar: '/src/assets/avatar-4.png', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM98056', user: 'Andi Lane', avatar: '/src/assets/avatar-5.png', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
];

const ordersPerPage = 5;

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // 2. Calculate totalPages dynamically based on the data.
  const totalPages = Math.ceil(allOrders.length / ordersPerPage);

  // 3. Calculate the subset of orders to display
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = allOrders.slice(startIndex, startIndex + ordersPerPage);

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

      {/* 4. Pass ONLY the 'currentOrders' to the table */}
      <OrderTable orders={currentOrders} />
      
      {/* 5. Only show pagination if there is more than one page */}
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Orders;