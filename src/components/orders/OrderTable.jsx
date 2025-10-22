import React from 'react';
import styles from './OrderTable.module.css';

// Placeholder data
const orders = [
  { id: 'CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: 'CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Lorry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: 'CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bogwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: 'CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: 'CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
];

const OrderTable = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Complete': return styles.complete;
      case 'Approved': return styles.complete; // Assuming same style
      case 'In Progress': return styles.inProgress;
      case 'Pending': return styles.pending;
      case 'Rejected': return styles.rejected;
      default: return '';
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.orderTable}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className={styles.orderId}>{order.id}</td>
              <td>{order.user}</td>
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