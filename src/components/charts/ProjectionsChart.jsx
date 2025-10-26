import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './ProjectionsChart.module.css';

// Original data
const rawData = [
  { name: 'Jan', Projections: 30, Actuals: 25 },
  { name: 'Feb', Projections: 40, Actuals: 38 },
  { name: 'Mar', Projections: 50, Actuals: 42 },
  { name: 'Apr', Projections: 45, Actuals: 48 }, // Actuals > Projections
  { name: 'May', Projections: 60, Actuals: 55 },
  { name: 'Jun', Projections: 58, Actuals: 62 }, // Actuals > Projections
];

// Process data for stacked bar
const data = rawData.map(item => {
  if (item.Actuals >= item.Projections) {
    return {
      ...item,
      baseValue: item.Projections, // Base is projection
      difference: 0, // No positive difference
      actualIsHigher: true,
    };
  } else {
    return {
      ...item,
      baseValue: item.Actuals, // Base is actual
      difference: item.Projections - item.Actuals, // Positive difference
      actualIsHigher: false,
    };
  }
});

const ProjectionsChart = () => {
  const { theme } = useContext(ThemeContext);
  const gridColor = theme === 'light' ? '#E5E7EB' : '#374151';
  const textColor = theme === 'light' ? '#6B7280' : '#9CA3AF';
  const baseBarColor = '#90CAF9'; // Lighter blue
  const differenceBarColor = '#6B7280'; // Darker gray

  const maxProjection = Math.max(...rawData.map(item => item.Projections));
  const yAxisDomain = [0, Math.ceil(maxProjection / 10) * 10]; // Round up

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Projections vs Actuals</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: -10, bottom: 5 }}
          barCategoryGap="20%"
          barGap={0}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis dataKey="name" tick={{ fill: textColor }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fill: textColor }}
            tickFormatter={(value) => new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(value)}
            domain={yAxisDomain}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: 'rgba(255,255,255,0.1)' }}
            contentStyle={{
              backgroundColor: theme === 'light' ? '#fff' : '#1F2937',
              borderColor: gridColor,
              borderRadius: '8px',
              border: `1px solid ${gridColor}`
            }}
            labelStyle={{ color: textColor }}
            itemStyle={{ color: textColor }}
            formatter={(value, name, props) => {
              const original = props.payload;
              if (name === 'baseValue') return [new Intl.NumberFormat().format(original.Actuals), 'Actuals'];
              if (name === 'difference') return [new Intl.NumberFormat().format(original.Projections), 'Projections'];
              return null;
            }}
          />
          <Bar dataKey="baseValue" fill={baseBarColor} stackId="a" radius={[0, 0, 4, 4]} />
          <Bar dataKey="difference" fill={differenceBarColor} stackId="a" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsChart;