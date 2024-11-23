import React, { useState, useRef } from 'react';
import './DeodrantsPage.css'


const DeodorantsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formRef = useRef(null);

  const items = [
    { 
      name: 'Fresh Breeze Deo', 
      description: 'A long-lasting, fresh fragrance for daily use.', 
      originalPrice: '$15', 
      discountedPrice: '$10', 
      image: 'https://supertails.com/cdn/shop/products/Frame10650_2-293666.png?v=1696551410' 
    },
    { 
      name: 'Ocean Mist Deo', 
      description: 'Experience the refreshing ocean scent.', 
      originalPrice: '$20', 
      discountedPrice: '$14', 
      image: 'https://supertails.com/cdn/shop/products/Frame1-2022-03-04T161311.020-671708.png?v=1696477919' 
    },
    { 
      name: 'Citrus Splash Deo', 
      description: 'A burst of citrus to keep you energized.', 
      originalPrice: '$18', 
      discountedPrice: '$12', 
      image: 'https://supertails.com/cdn/shop/products/CLICL0002TR_1_1.jpg?v=1696625326' 
    },
    { 
      name: 'Mystic Wood Deo', 
      description: 'A warm, woody fragrance for any occasion.', 
      originalPrice: '$25', 
      discountedPrice: '$18', 
      image: 'https://supertails.com/cdn/shop/files/1_25.png?v=1727705848' 
    },
    { 
      name: 'Lavender Calm Deo', 
      description: 'A soothing lavender scent to calm the senses.', 
      originalPrice: '$16', 
      discountedPrice: '$11', 
      image: 'https://supertails.com/cdn/shop/products/Frame1-2022-11-07T115233.867.png?v=1696628378' 
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
    <div className="deodorants-page">
      <h1 style={{marginTop:"100px",fontSize:"50px",color:"black"}}>Deodorants Collection</h1>
      <div style={{marginTop:"50px"}} className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
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

export default DeodorantsPage;
