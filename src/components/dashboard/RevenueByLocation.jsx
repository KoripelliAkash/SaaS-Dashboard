import React, { useEffect, useState } from 'react';
import styles from './RevenueByLocation.module.css';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChoroplethController, ProjectionScale, GeoFeature, ColorScale } from 'chartjs-chart-geo';

// Register the geo controller and its components
ChartJS.register(ChoroplethController, ProjectionScale, GeoFeature, ColorScale, ...registerables);

// Placeholder data (remains the same)
const locations = [
  { name: 'New York', value: 72, percentage: 72 },
  { name: 'San Francisco', value: 39, percentage: 39 },
  { name: 'Sydney', value: 25, percentage: 25 },
  { name: 'Singapore', value: 61, percentage: 61 },
];

const RevenueByLocation = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    // Fetch the map data from the CORRECT URL
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json') // <-- THE ONLY CHANGE IS HERE
      .then((response) => response.json())
      .then((data) => {
        const countries = ChartJS.helpers.topojson.feature(data, data.objects.countries).features;
        setMapData(countries);
      });
  }, []);

  const chartData = {
    labels: mapData ? mapData.map((d) => d.properties.name) : [],
    datasets: [
      {
        label: 'Countries',
        data: mapData ? mapData.map(() => ({ value: 1 })) : [],
        backgroundColor: '#E5E7EB',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      projection: {
        axis: 'x',
        projection: 'mercator',
      },
    },
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Revenue by Location</h3>
      
      <div className={styles.mapContainer}>
        {mapData ? (
          <Chart type="choropleth" data={chartData} options={chartOptions} />
        ) : (
          <p>Loading map...</p>
        )}
      </div>

      <ul className={styles.locationList}>
        {locations.map(loc => (
          <li key={loc.name} className={styles.locationItem}>
            <div className={styles.locationInfo}>
              <span className={styles.locationName}>{loc.name}</span>
              <span className={styles.locationValue}>{loc.value}K</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${loc.percentage}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevenueByLocation;