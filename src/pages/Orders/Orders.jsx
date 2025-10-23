import React, { useState, useMemo, useEffect } from 'react';
import styles from './Orders.module.css';
import OrderTable from '../../components/orders/OrderTable';
import Pagination from '../../components/common/Pagination';
import { FiPlus, FiFilter, FiSearch } from 'react-icons/fi';
import { FaSort } from 'react-icons/fa';

const allOrders = [
    { id: '#CM9801', user: 'Natali Craig', avatar: '/src/assets/avatar-1.png', project: 'Landing Page', address: 'Meadow Lane Oakland', date: new Date(), status: 'In Progress' },
    { id: '#CM9802', user: 'Kate Morrison', avatar: '/src/assets/avatar-2.png', project: 'CRM Admin pages', address: 'Lorry San Francisco', date: new Date(Date.now() - 3600000), status: 'Complete' }, 
    { id: '#CM9803', user: 'Drew Cano', avatar: '/src/assets/avatar-3.png', project: 'Client Project', address: 'Bogwell Avenue Ocala', date: new Date(Date.now() - 86400000), status: 'Pending' }, 
    { id: '#CM9804', user: 'Orlando Diggs', avatar: '/src/assets/avatar-4.png', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: new Date('2025-09-15T11:00:00Z'), status: 'Approved' },
    { id: '#CM9805', user: 'Andi Lane', avatar: '/src/assets/avatar-5.png', project: 'App Landing Page', address: 'Nest Lane Olivette', date: new Date('2025-09-10T09:00:00Z'), status: 'Rejected' },
    { id: '#CM9806', user: 'Natali Craig', avatar: '/src/assets/avatar-1.png', project: 'Landing Page', address: 'Meadow Lane Oakland', date: new Date(), status: 'In Progress' },
    { id: '#CM9807', user: 'Kate Morrison', avatar: '/src/assets/avatar-2.png', project: 'CRM Admin pages', address: 'Lorry San Francisco', date: new Date(Date.now() - 3600000), status: 'Complete' }, 
    { id: '#CM9808', user: 'Drew Cano', avatar: '/src/assets/avatar-3.png', project: 'Client Project', address: 'Bogwell Avenue Ocala', date: new Date(Date.now() - 86400000), status: 'Pending' }, 
    { id: '#CM9809', user: 'Orlando Diggs', avatar: '/src/assets/avatar-4.png', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: new Date('2025-09-15T11:00:00Z'), status: 'Approved' },
    { id: '#CM9810', user: 'Andi Lane', avatar: '/src/assets/avatar-5.png', project: 'App Landing Page', address: 'Nest Lane Olivette', date: new Date('2025-09-10T09:00:00Z'), status: 'Rejected' },
    { id: '#CM9811', user: 'Natali Craig', avatar: '/src/assets/avatar-1.png', project: 'Landing Page', address: 'Meadow Lane Oakland', date: new Date(), status: 'In Progress' },
    { id: '#CM9812', user: 'Kate Morrison', avatar: '/src/assets/avatar-2.png', project: 'CRM Admin pages', address: 'Lorry San Francisco', date: new Date(Date.now() - 3600000), status: 'Complete' }, 
    { id: '#CM9813', user: 'Drew Cano', avatar: '/src/assets/avatar-3.png', project: 'Client Project', address: 'Bogwell Avenue Ocala', date: new Date(Date.now() - 86400000), status: 'Pending' }, 
    { id: '#CM9814', user: 'Orlando Diggs', avatar: '/src/assets/avatar-4.png', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: new Date('2025-09-15T11:00:00Z'), status: 'Approved' },
    { id: '#CM9815', user: 'Andi Lane', avatar: '/src/assets/avatar-5.png', project: 'App Landing Page', address: 'Nest Lane Olivette', date: new Date('2025-09-10T09:00:00Z'), status: 'Rejected' },
];

const ordersPerPage = 5;

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    useEffect(() => {
        setCurrentPage(1);
    }, [statusFilter, searchTerm]);

    const processedOrders = useMemo(() => {
        let filteredData = allOrders.filter(order => {
            const statusMatch = statusFilter === 'All' || order.status === statusFilter;
            
            const searchMatch = !searchTerm || 
                order.user.toLowerCase().includes(searchTerm.toLowerCase()) || 
                order.project.toLowerCase().includes(searchTerm.toLowerCase());
            
            return statusMatch && searchMatch;
        });
        
        if (sortConfig.key) {
            filteredData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) { 
                    return sortConfig.direction === 'ascending' ? -1 : 1; 
                }
                if (a[sortConfig.key] > b[sortConfig.key]) { 
                    return sortConfig.direction === 'ascending' ? 1 : -1; 
                }
                return 0;
            });
        }
        
        return filteredData;
    }, [statusFilter, searchTerm, sortConfig]);

    const totalPages = Math.ceil(processedOrders.length / ordersPerPage);
    const currentOrders = processedOrders.slice((currentPage - 1) * ordersPerPage, currentPage * ordersPerPage);

    const requestSort = (key) => {
        if (sortConfig.key === key && sortConfig.direction === 'ascending') { 
            setSortConfig({ key, direction: 'descending' }); 
        } 
        else if (sortConfig.key === key && sortConfig.direction === 'descending') { 
            setSortConfig({ key: null, direction: 'ascending' }); 
        } 
        else { 
            setSortConfig({ key, direction: 'ascending' }); 
        }
    };

    return (
        <div className={styles.ordersContainer}>
            <h2 className={styles.pageTitle}>Order List</h2>
            <div className={styles.toolbar}>
                <div className={styles.toolbarActions}>
                    <button className={styles.actionButton}><FiPlus /></button>
                    <div className={styles.filterWrapper}>
                        <FiFilter />
                        <select 
                            className={styles.filterSelect}
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Complete">Complete</option>
                            <option value="Approved">Approved</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <button className={styles.actionButton}><FaSort /></button>
                </div>
                <div className={styles.searchBar}>
                    <FiSearch className={styles.searchIcon} />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <OrderTable
                orders={currentOrders}
                onSort={requestSort}
                sortConfig={sortConfig}
            />
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