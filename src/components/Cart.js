// Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import BackButton from './BackButton'; 
import { Link } from 'react-router-dom';
import {useState} from 'react';

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [ setCart] = useState([]);

  return (
    <div>
      <h2>Your Cart</h2>
      <BackButton />
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <p>{item.name} - {item.price}</p>
              <img src={item.imageURL} alt={item.name}/>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
            <div>
        <strong>Total: ${totalPrice}</strong>
      </div>
          <button onClick={clearCart}>Clear Cart</button>
         
          <Link to="/payment">Proceed to payment</Link>

        </div>
      )}
    </div>
  );
};

export default Cart;