import React, { useState, useEffect } from 'react';
import styles from './OrderTable.module.css';

// 1. Remove allOrders array.
// 2. Accept 'orders' as a prop.
const OrderTable = ({ orders }) => { 
  const [selectedRows, setSelectedRows] = useState([]);

  // 3. Add useEffect to clear selection when the page changes
  useEffect(() => {
    setSelectedRows([]);
  }, [orders]);

  // 4. Remove all pagination logic (it's now in the parent)

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(orders.map(order => order.id)); // Use 'orders' prop
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
            <th>
              <input 
                type="checkbox" 
                onChange={handleSelectAll} 
                // 5. Update checked logic to be based on the prop
                checked={orders.length > 0 && selectedRows.length === orders.length}
              />
            </th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* 6. Map over the 'orders' prop instead of 'currentOrders' */}
          {orders.map((order) => (
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