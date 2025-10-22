import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './SalesDonutChart.module.css';

// Placeholder data
const data = [
  { name: 'Direct', value: 300.56 },
  { name: 'Affiliate', value: 135.18 },
  { name: 'Sponsored', value: 154.02 },
  { name: 'E-mail', value: 48.96 },
];

const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'];

const SalesDonutChart = () => {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === 'light' ? '#6B7280' : '#9CA3AF';
  
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Total Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend 
            iconType="circle" 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            formatter={(value, entry) => (
              <span style={{ color: textColor }}>{value}: ${entry.payload.value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesDonutChart; // And this one too!