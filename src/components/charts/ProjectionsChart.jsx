import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './ProjectionsChart.module.css';

const data = [
  { name: 'Jan', Projections: 30, Actuals: 25 },
  { name: 'Feb', Projections: 40, Actuals: 38 },
  { name: 'Mar', Projections: 50, Actuals: 42 },
  { name: 'Apr', Projections: 45, Actuals: 48 },
  { name: 'May', Projections: 60, Actuals: 55 },
  { name: 'Jun', Projections: 58, Actuals: 62 },
];

const ProjectionsChart = () => {
  const { theme } = useContext(ThemeContext);
  const barColor = theme === 'light' ? '#A5B4FC' : '#60A5FA';
  const gridColor = theme === 'light' ? '#E5E7EB' : '#374151';
  const textColor = theme === 'light' ? '#6B7280' : '#9CA3AF';

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Projections vs Actuals</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="name" tick={{ fill: textColor }} />
          <YAxis tick={{ fill: textColor }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: theme === 'light' ? '#fff' : '#1F2937', 
              borderColor: gridColor
            }}
          />
          <Bar dataKey="Actuals" fill="#3B82F6" barSize={20} radius={[4, 4, 0, 0]} />
          <Bar dataKey="Projections" fill={barColor} barSize={20} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsChart;