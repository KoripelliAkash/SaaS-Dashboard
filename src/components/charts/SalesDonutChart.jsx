import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "./SalesDonutChart.module.css";

const data = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
];

const COLORS = ["#A5B4FC", "#86EFAC", "#93C5FD", "#C7D2FE"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltipBox}>
        <span>{((payload[0].value / 638.72) * 100).toFixed(1)}%</span>
      </div>
    );
  }
  return null;
};

const SalesDonutChart = () => {
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Total Sales</h3>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={3}
              cornerRadius={25}
              startAngle={220}
              endAngle={-140}
              
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        {data.map((entry, index) => (
          <div key={entry.name} className={styles.legendItem}>
            <div className={styles.legendLeft}>
              <span
                className={styles.legendDot}
                style={{ backgroundColor: COLORS[index] }}
              ></span>
              <span>{entry.name}</span>
            </div>
            <span className={styles.legendValue}>${entry.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesDonutChart;
