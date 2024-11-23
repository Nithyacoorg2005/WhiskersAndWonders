import React, { useState, useRef } from 'react';
import './JacketsAndSweatersPage.css'

const JacketsAndSweatersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formRef = useRef(null);

  const items = [
    { 
      name: 'Classic Denim Jacket', 
      description: 'A versatile denim jacket perfect for layering.', 
      price:"6986",
      image: 'https://supertails.com/cdn/shop/files/Frame_12_bcef4dfc-ae8e-4a3b-8826-3882a0a34769.png?v=1723533705' 
    },
    { 
      name: 'Woolen Sweater', 
      description: 'Warm and cozy woolen sweater for cold days.', 
      price:"9856",
      image: 'https://supertails.com/cdn/shop/files/IMG_9212_1.png?v=1728468489' 
    },
    { 
      name: 'Hooded Puffer Jacket', 
      description: 'Water-resistant puffer jacket with a hood.', 
      price:"8866",
      image: 'https://supertails.com/cdn/shop/files/Frame106722119.png?v=1701758043' 
    },
    { 
      name: 'Fleece Pullover', 
      description: 'Soft fleece pullover that’s great for lounging.', 
      price:"8936",
      image: 'https://supertails.com/cdn/shop/files/Frame106722117.png?v=1701755703' 
    },
    { 
      name: 'Leather Bomber Jacket', 
      description: 'Classic leather bomber jacket with a modern fit.', 
      price:"9876",
      image: 'https://supertails.com/cdn/shop/files/image1443_1.png?v=1700567739' 
    }
  ];

  const handleBuyNow = () => {
    if (selectedSize) {
      setShowForm(true);
      setTimeout(() => formRef.current.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      alert('Please select a size.');
    }
  };

  const handleProceedToPay = () => {
    if (paymentMethod) {
      setOrderPlaced(true);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="jackets-sweaters-page">
      <h1 style={{marginTop:"100px",fontSize:"50px",color:"black"}}>Jackets and Sweaters</h1>
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <h1>${item.price}</h1>
            <p>{item.description}</p>
            <label>Select Size: </label>
            <select onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="">Select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <br />
            <button style={{backgroundColor:"#ff5757"}}onClick={handleBuyNow}>Buy Now</button>
          </div>
        ))}
      </div>

      {showForm && !orderPlaced && (
        <div className="order-form" ref={formRef}>
          <h2>Order Form</h2>
          <form>
            <label>
              Name:
              <input type="text" required />
            </label>
            <label>
              Phone Number:
              <input type="tel" required />
            </label>
            <label>
              Email:
              <input type="email" required />
            </label>
            <label>
              Address:
              <textarea required></textarea>
            </label>

            <h3>Payment Methods</h3>
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="PhonePe" 
                onChange={() => setPaymentMethod('PhonePe')} 
              /> 
              PhonePe
            </label>
            {paymentMethod === 'PhonePe' && (
              <div>
                <label>Enter UPI ID: <input type="text" required /></label>
              </div>
            )}

            <label>
              <input 
                type="radio" 
                name="payment" 
                value="Paytm" 
                onChange={() => setPaymentMethod('Paytm')} 
              /> 
              Paytm
            </label>
            {paymentMethod === 'Paytm' && (
              <div>
                <label>Enter Mobile Number: <input type="text" required /></label>
              </div>
            )}

            <label>
              <input 
                type="radio" 
                name="payment" 
                value="UPI" 
                onChange={() => setPaymentMethod('UPI')} 
              /> 
              UPI
            </label>
            {paymentMethod === 'UPI' && (
              <div>
                <label>Enter UPI ID: <input type="text" required /></label>
              </div>
            )}

            <label>
              <input 
                type="radio" 
                name="payment" 
                value="Bank Account" 
                onChange={() => setPaymentMethod('Bank Account')} 
              /> 
              Bank Account
            </label>
            {paymentMethod === 'Bank Account' && (
              <div>
                <label>Enter Account Number: <input type="text" required /></label>
                <label>Enter CVV: <input type="text" required /></label>
              </div>
            )}

            <label>
              <input 
                type="radio" 
                name="payment" 
                value="Scanner" 
                onChange={() => setPaymentMethod('Scanner')} 
              /> 
              QR Code Scanner
            </label>
            {paymentMethod === 'Scanner' && (
              <div>
                <p>Scan the QR Code below to complete the payment:</p>
                <img src="https://example.com/qr-code.jpg" alt="QR Code" />
              </div>
            )}

            <label>
              <input 
                type="radio" 
                name="payment" 
                value="Cash on Delivery" 
                onChange={() => setPaymentMethod('Cash on Delivery')} 
              /> 
              Cash on Delivery
            </label>

            <button type="button" onClick={handleProceedToPay}>
              Proceed to Pay
            </button>
          </form>
        </div>
      )}

      {orderPlaced && (
        <div className="order-success">
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your purchase. Your order will be processed shortly.</p>
        </div>
      )}
    </div>
  );
};

export default JacketsAndSweatersPage;
