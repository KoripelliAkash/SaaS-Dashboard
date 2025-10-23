import React from 'react';
import styles from './RevenueByLocation.module.css';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// Path to your downloaded TopoJSON file in the `public` folder
const geoUrl = "/world-110m.json";

// Placeholder data (remains the same)
const locations = [
  { name: 'New York', value: 72, percentage: 72 },
  { name: 'San Francisco', value: 39, percentage: 39 },
  { name: 'Sydney', value: 25, percentage: 25 },
  { name: 'Singapore', value: 61, percentage: 61 },
];

const RevenueByLocation = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Revenue by Location</h3>
      
      <div className={styles.mapContainer}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 80, 
            center: [0, 20] 
          }}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E5E7EB" // Land color
                  stroke="#FFFFFF" // Border color between countries
                  strokeWidth={0.5}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
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