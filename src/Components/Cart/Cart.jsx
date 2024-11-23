import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, updateCart }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentMessage, setPaymentMessage] = useState(false);

  // Calculate the total amount
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [cartItems]);

  // Handle quantity increment
  const handleIncrement = (item) => {
    updateCart(item, item.quantity + 1);
  };

  // Handle quantity decrement
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateCart(item, item.quantity - 1);
    }
  };

  // Remove item from cart
  const handleRemove = (item) => {
    updateCart(item, 0);
  };

  // Handle payment
  const handlePayment = () => {
    // Simulate payment processing...
    setPaymentMessage(true);

    // Hide the message after 5 seconds
    setTimeout(() => {
      setPaymentMessage(false);
    }, 5000);
  };

  return (
    <div className="cart-container">
      <h1 style={{marginTop:"100px",fontSize:"30px"}}>Your Cart</h1>

      {paymentMessage && (
        <div style={{width:"300px",height:"50px",backgroundColor:"#ff5757",color:"#fff",borderRadius:"10px",paddingTop:"10px",marginLeft:"600px"}}className="payment-success-message">
          Payment Successful!
        </div>
      )}

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map((item) => ( 
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(item)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <h2>Total: ₹{totalAmount}</h2>

      <div className="payment-section">
        <h3>Select Payment Method</h3>
        <div>
          <label>UPI Payment:</label>
          <input type="text" placeholder="Enter UPI ID" />
        </div>
        <div>
          <label>Credit/Debit Card:</label>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiry Date" />
          <input type="text" placeholder="CVV" />
        </div>
        <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;
