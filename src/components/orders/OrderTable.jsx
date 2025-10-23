import React, { useState } from 'react';
import styles from './OrderTable.module.css';

// Placeholder data
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

const OrderTable = ({ currentPage }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const ordersPerPage = 5;
  const totalPages = Math.ceil(allOrders.length / ordersPerPage);

  // 4. Calculate the orders to display on the current page
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = allOrders.slice(startIndex, startIndex + ordersPerPage);
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(currentOrders.map(order => order.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const getStatusClass = (status) => {
    if (status === 'Complete' || status === 'Approved') return styles.complete;
    if (status === 'In Progress') return styles.inProgress;
    if (status === 'Pending') return styles.pending;
    if (status === 'Rejected') return styles.rejected;
    return '';
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.orderTable}>
        <thead>
          <tr>
            <th><input type="checkbox" onChange={handleSelectAll} /></th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id} className={selectedRows.includes(order.id) ? styles.selected : ''}>
              <td>
                <input 
                  type="checkbox" 
                  checked={selectedRows.includes(order.id)}
                  onChange={() => handleSelectRow(order.id)}
                />
              </td>
              <td className={styles.orderId}>{order.id}</td>
              <td>
                <div className={styles.userCell}>
                  <img src={order.avatar} alt={order.user} className={styles.avatar} />
                  {order.user}
                </div>
              </td>
              <td>{order.project}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>
                <span className={`${styles.statusPill} ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;