import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './SalesDonutChart.module.css';

const data = [
  { name: 'Direct', value: 300.56 },
  { name: 'Affiliate', value: 135.18 },
  { name: 'Sponsored', value: 154.02 },
  { name: 'E-mail', value: 48.96 },
];
const COLORS = ['#60A5FA', '#3B82F6', '#BFDBFE', '#93C5FD'];

const SalesDonutChart = () => {
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Total Sales</h3>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              stroke="none" // <-- Remove space between segments
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className={styles.centerText}>
          38.6%
        </div>
      </div>
      <div className={styles.legend}>
        {data.map((entry, index) => (
            <div key={entry.name} className={styles.legendItem}>
                <span className={styles.legendDot} style={{backgroundColor: COLORS[index]}}></span>
                {entry.name}: ${entry.value}
            </div>
        ))}
      </div>
    </div>
  );
};
export default SalesDonutChart;