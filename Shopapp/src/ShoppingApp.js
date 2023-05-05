import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingApp() {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', price: 1 },
    { id: 2, name: 'Banana', price: 2 },
    { id: 3, name: 'Orange', price: 3 },
  ]);

  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container">
      <h1 className="my-4">Shopping App</h1>

      <h2>Items</h2>
      <ul className="list-group mb-4">
        {items.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - ${item.price}{' '}
            <button
              className="btn btn-primary"
              onClick={() => addItemToCart(item)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - ${item.price}{' '}
            <button
              className="btn btn-danger"
              onClick={() => removeItemFromCart(item.id)}
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingApp;
