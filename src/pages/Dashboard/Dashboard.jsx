import React from 'react';
import styles from './Dashboard.module.css';
import StatCard from '../../components/common/StatCard';
import ProjectionsChart from '../../components/charts/ProjectionsChart';
import RevenueChart from '../../components/charts/RevenueChart';
import SalesDonutChart from '../../components/charts/SalesDonutChart';
import TopProducts from '../../components/dashboard/TopProducts';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Top row of stat cards */}
      <div className={styles.gridContainer}>
        <StatCard title="Customers" value="3,781" percentage={-11.01} isPositive={false} />
        <StatCard title="Orders" value="1,219" percentage={-0.03} isPositive={false} />
        <StatCard title="Revenue" value="$695" percentage={15.03} isPositive={true} />
        <StatCard title="Growth" value="30.1%" percentage={6.08} isPositive={true} />

        {/* Main charts row */}
        <div className={styles.projections}>
          <ProjectionsChart />
        </div>
        <div className={styles.revenue}>
          <RevenueChart />
        </div>

        {/* Bottom row with tables and donut chart */}
        <div className={styles.topProducts}>
          <TopProducts />
        </div>
        <div className={styles.sales}>
          <SalesDonutChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;