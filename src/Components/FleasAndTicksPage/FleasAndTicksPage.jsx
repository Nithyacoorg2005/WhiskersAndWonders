import React, { useState, useRef } from 'react';
import './FleasAndTicksPage.css'

const FleasAndTicksPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formRef = useRef(null);

  const items = [
    { 
      name: 'Flea Collar', 
      description: 'Protects against fleas for up to 8 months.', 
      originalPrice: '$20', 
      discountedPrice: '$15', 
      image: 'https://supertails.com/cdn/shop/files/51mRajAd-5L._SL1000.jpg?v=1722923822' 
    },
    { 
      name: 'Tick Spray', 
      description: 'Effective tick protection for outdoor pets.', 
      originalPrice: '$15', 
      discountedPrice: '$10', 
      image: 'https://supertails.com/cdn/shop/files/Pharmacy_63_d4cce1d4-e1f4-4da2-b907-292e2d866127.png?v=1714454066' 
    },
    { 
      name: 'Flea Comb', 
      description: 'Removes fleas and ticks while grooming.', 
      originalPrice: '$8', 
      discountedPrice: '$5', 
      image: 'https://supertails.com/cdn/shop/files/Frame-2023-07-11T130006.547.png?v=1696635500' 
    },
    { 
      name: 'Spot Treatment', 
      description: 'Quick-action spot treatment for fleas.', 
      originalPrice: '$18', 
      discountedPrice: '$12', 
      image: 'https://supertails.com/cdn/shop/files/COMBO0002STPH.jpg?v=1696463531' 
    },
    { 
      name: 'Flea Shampoo', 
      description: 'Anti-flea shampoo for a clean, fresh coat.', 
      originalPrice: '$12', 
      discountedPrice: '$8', 
      image: 'https://supertails.com/cdn/shop/files/ph-2024-06-07T150854.347.jpg?v=1717753147' 
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
    <div className="fleas-ticks-page">
      <h1 style={{marginTop:"100px",fontSize:"50px",color:"black"}}>Fleas and Ticks Protection</h1>
      <div className="items-grid">
        {items.map((item, index) => (
          <div style={{marginTop:"50px"}} key={index} className="item-card">
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

export default FleasAndTicksPage;
