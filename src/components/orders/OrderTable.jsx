import React, { useState, useEffect } from 'react';
import styles from './OrderTable.module.css';
// 1. Import statements are updated here
import { FiArrowUp, FiArrowDown, FiCalendar } from 'react-icons/fi';
import { FaArrowsAltV } from 'react-icons/fa';

const formatDate = (date) => {
    const now = new Date();
    const diffSeconds = Math.round((now - date) / 1000);
    if (diffSeconds < 60) return "Just now";
    if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`;
    if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`;
    return date.toLocaleDateString();
};

const OrderTable = ({ orders, onSort, sortConfig }) => {
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        setSelectedRows([]);
    }, [orders]);

    const getStatusClass = (status) => {
        if (status === 'Complete' || status === 'Approved') return styles.complete;
        if (status === 'In Progress') return styles.inProgress;
        if (status === 'Pending') return styles.pending;
        if (status === 'Rejected') return styles.rejected;
        return '';
    };

    const getSortIcon = (key) => {
        if (!sortConfig || sortConfig.key !== key) {
            // 2. The new icon is used here for inactive columns
            return <FaArrowsAltV className={styles.sortIconInactive} />;
        }
        return sortConfig.direction === 'ascending' ? <FiArrowUp /> : <FiArrowDown />;
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
          setSelectedRows(orders.map(order => order.id));
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

    return (
        <div className={styles.tableContainer}>
            <table className={styles.orderTable}>
                {/* The table head uses the new icon */}
                <thead>
                    <tr>
                        <th>
                            <input 
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={orders.length > 0 && selectedRows.length === orders.length}
                            />
                        </th>
                        <th><button onClick={() => onSort('id')} className={styles.headerButton}>Order ID {getSortIcon('id')}</button></th>
                        <th><button onClick={() => onSort('user')} className={styles.headerButton}>User {getSortIcon('user')}</button></th>
                        <th><button onClick={() => onSort('project')} className={styles.headerButton}>Project {getSortIcon('project')}</button></th>
                        <th>Address</th>
                        <th><button onClick={() => onSort('date')} className={styles.headerButton}>Date {getSortIcon('date')}</button></th>
                        <th>Status</th>
                    </tr>
                </thead>
                {/* The table body is unchanged */}
                <tbody>
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
                            <td>
                                <div className={styles.dateCell}>
                                    <FiCalendar />
                                    <span>{formatDate(order.date)}</span>
                                </div>
                            </td>
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