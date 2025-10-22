import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './RevenueChart.module.css'; // We'll create this file next

// Placeholder data
const data = [
  { name: 'Jan', current: 12000, previous: 15000 },
  { name: 'Feb', current: 21000, previous: 19000 },
  { name: 'Mar', current: 35000, previous: 28000 },
  { name: 'Apr', current: 28000, previous: 31000 },
  { name: 'May', current: 42000, previous: 38000 },
  { name: 'Jun', current: 58000, previous: 48000 },
];

const RevenueChart = () => {
  const { theme } = useContext(ThemeContext);
  const gridColor = theme === 'light' ? '#E5E7EB' : '#374151';
  const textColor = theme === 'light' ? '#6B7280' : '#9CA3AF';
  const accentColor = theme === 'light' ? '#1F2937' : '#F9FAFB';

  return (
    <div className={styles.chartContainer}>
      <div className={styles.header}>
        <h3 className={styles.chartTitle}>Revenue</h3>
        <div className={styles.legend}>
          <span className={`${styles.legendItem} ${styles.current}`}>Current Week: $58,211</span>
          <span className={`${styles.legendItem} ${styles.previous}`}>Previous Week: $68,768</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <defs>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={accentColor} stopOpacity={0.4}/>
              <stop offset="95%" stopColor={accentColor} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="name" tick={{ fill: textColor }} />
          <YAxis tick={{ fill: textColor }} unit="$" tickFormatter={(value) => new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(value)} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: theme === 'light' ? '#fff' : '#1F2937', 
              borderColor: gridColor
            }}
          />
          <Area type="monotone" dataKey="previous" stroke="#9CA3AF" fillOpacity={0} strokeWidth={2} strokeDasharray="5 5" />
          <Area type="monotone" dataKey="current" stroke={accentColor} strokeWidth={3} fillOpacity={1} fill="url(#colorCurrent)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart; // This line is the solution!