// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id} onClick={() => onProductClick(product.id)}>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <img src={product.imageURL} alt={product.name} />
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
