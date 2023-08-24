import React from 'react';
import { useCart } from '../context/CartContext';

const ProductDetail = ({ product, onBackToMain }) => {
  const { addToCart } = useCart(); // Use the addToCart function from the context

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageURL}alt={product.name} />
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={onBackToMain}>Back to Main</button>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;