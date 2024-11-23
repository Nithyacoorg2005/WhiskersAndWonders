import React, { useState, useRef } from 'react';
import './TshirtsAndShirtsPage.css'

const TshirtsAndShirtsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formRef = useRef(null);

  const items = [
    { 
      name: 'Graphic Tee', 
      description: 'Stylish graphic T-shirt with a trendy design.', 
      image: 'https://supertails.com/cdn/shop/files/image1759_1.png?v=1710582755',
      price:"963"
    },
    { 
      name: 'Classic White Shirt', 
      description: 'Crisp white shirt suitable for all occasions.',
      price:"652", 
      image: 'https://supertails.com/cdn/shop/files/Indigo-4.jpg?v=1724997486' 
    },
    { 
      name: 'Checked Casual Shirt', 
      description: 'Casual checked shirt in soft, comfortable fabric.',
      price:"542",
      image: 'https://supertails.com/cdn/shop/files/Frame344685173_1.png?v=1724996811' 
    },
    { 
      name: 'Basic Black Tee', 
      description: 'A classic black T-shirt, essential for any wardrobe.', 
      price:"865",
      image: 'https://supertails.com/cdn/shop/files/Frame_344685314.png?v=1722913135' 
    },
    { 
      name: 'Striped Polo Shirt', 
      description: 'Casual polo shirt with contrasting stripes.', 
      price:"698",
      image: 'https://supertails.com/cdn/shop/files/Frame_344685191.png?v=1722575972' 
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
    <div className="tshirts-and-shirts-page">
      <h1 style={{marginTop:"100px",fontSize:"50px"}}>T-shirts and Shirts</h1>
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h1>${item.price}</h1>
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

export default TshirtsAndShirtsPage;
