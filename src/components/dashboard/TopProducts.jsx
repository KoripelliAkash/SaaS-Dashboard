import React from 'react';
import styles from './TopProducts.module.css';

// Placeholder data
const products = [
  { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
  { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
  { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
  { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
  { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1145.81 },
];

const TopProducts = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Top Selling Products</h3>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>${product.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;