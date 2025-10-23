import React from 'react';
import styles from './Dashboard.module.css';
import StatCard from '../../components/common/StatCard';
import ProjectionsChart from '../../components/charts/ProjectionsChart';
import RevenueChart from '../../components/charts/RevenueChart';
import SalesDonutChart from '../../components/charts/SalesDonutChart';
import TopProducts from '../../components/dashboard/TopProducts';
import RevenueByLocation from '../../components/dashboard/RevenueByLocation'; // <-- Import new component

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Stat cards are outside the main grid for this layout */}
      <div className={styles.statCardsContainer}>
        <StatCard title="Customers" value="3,781" percentage={11.01} isPositive={true} />
        <StatCard title="Orders" value="1,219" percentage={-0.03} isPositive={false} />
        <StatCard title="Revenue" value="$695" percentage={15.03} isPositive={true} />
        <StatCard title="Growth" value="30.1%" percentage={6.08} isPositive={true} />
      </div>
      
      {/* Main 2-column grid for charts and tables */}
      <div className={styles.mainGrid}>
        <div className={styles.gridColumn}>
          <RevenueChart />
          <TopProducts />
        </div>
        <div className={styles.gridColumn}>
          <ProjectionsChart />
          <RevenueByLocation />
          <SalesDonutChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;