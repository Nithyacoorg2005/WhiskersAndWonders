import React, { useState, useRef } from 'react';
import './TrimmersPage.css'

const TrimmersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formRef = useRef(null);

  const items = [
    { 
      name: 'Precision Trimmer', 
      description: 'Perfect for close cuts and detailing.', 
      originalPrice: '$50', 
      discountedPrice: '$35', 
      image: 'https://supertails.com/cdn/shop/files/Frame12014_1eda5d94-8320-4932-9422-bb4a0b452cd2.png?v=1696580801' 
    },
    { 
      name: 'Electric Grooming Kit', 
      description: 'All-in-one kit for your grooming needs.', 
      originalPrice: '$80', 
      discountedPrice: '$60', 
      image: 'https://supertails.com/cdn/shop/products/71ED-hZUxYL1.png?v=1696431972' 
    },
    { 
      name: 'Silent Trimmer', 
      description: 'Ultra-quiet and effective trimming.', 
      originalPrice: '$70', 
      discountedPrice: '$50', 
      image: 'https://supertails.com/cdn/shop/files/Frame106723840.png?v=1711958811' 
    },
    { 
      name: 'Battery-Operated Trimmer', 
      description: 'Cordless and portable for convenience.', 
      originalPrice: '$45', 
      discountedPrice: '$30', 
      image: 'https://supertails.com/cdn/shop/files/Frame106723570_326a64a8-6ba2-4d2f-99d0-6a3d76d435d8.png?v=1715779540' 
    },
    { 
      name: 'Waterproof Trimmer', 
      description: 'Safe for both wet and dry use.', 
      originalPrice: '$60', 
      discountedPrice: '$40', 
      image: 'https://supertails.com/cdn/shop/files/Frame11959_01c5d250-4438-4934-8a43-cf0c12ae4f44.png?v=1696595709' 
    }
  ];

  const handleBuyNow = () => {
    setShowForm(true);
    setTimeout(() => formRef.current.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleProceedToPay = () => {
    if (paymentMethod) {
      setOrderPlaced(true);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="trimmers-page">
      <h1 style={{marginTop:"100px",fontSize:"50px",color:"black"}}>Trimmers Collection</h1>
      <div className="items-grid">
        {items.map((item, index) => (
          <div style={{marginTop:"50px"}}key={index} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="item-price">
              <span className="original-price" style={{ textDecoration: 'line-through', color: 'grey' }}>
                {item.originalPrice}
              </span> 
              <span className="discounted-price" style={{ color: 'green', fontWeight: 'bold', marginLeft: '8px' }}>
                {item.discountedPrice}
              </span>
            </p>
            <button style={{backgroundColor:"#ff5757"}} onClick={handleBuyNow}>Buy Now</button>
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
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="Paytm" 
                onChange={() => setPaymentMethod('Paytm')} 
              /> 
              Paytm
            </label>
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="UPI" 
                onChange={() => setPaymentMethod('UPI')} 
              /> 
              UPI
            </label>
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="Bank Account" 
                onChange={() => setPaymentMethod('Bank Account')} 
              /> 
              Bank Account
            </label>
            <label>
              <input 
                type="radio" 
                name="payment" 
                value="Scanner" 
                onChange={() => setPaymentMethod('Scanner')} 
              /> 
              QR Code Scanner
            </label>
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

export default TrimmersPage;
