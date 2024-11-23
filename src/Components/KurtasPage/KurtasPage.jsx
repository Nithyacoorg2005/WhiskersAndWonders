import React, { useState, useRef } from 'react';
import './KurtasPage.css'

const KurtasPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formRef = useRef(null);

  const items = [
    { 
      name: 'Classic White Kurta', 
      description: 'A timeless white kurta for all occasions.', 
      price:"7845",
      image: 'https://supertails.com/cdn/shop/files/PawgyPetsClothing_5.png?v=1710582564' 
    },
    { 
      name: 'Printed Cotton Kurta', 
      description: 'Comfortable and stylish printed cotton kurta.', 
      price:"5698",
      image: 'https://imgs.search.brave.com/N07gYtVlD70IyA5LeAAkscawy9fKoJ7JKWBmGlKo1WQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzY5NDI1MjIvYy8y/MjUwLzIyNTAvMC8y/MzAvaWwvOGJjOTM4/LzMyMTE1MTMzMjgv/aWxfNjAweDYwMC4z/MjExNTEzMzI4X2Fv/YjkuanBn' 
    },
    { 
      name: 'Floral Embroidered Kurta', 
      description: 'Beautiful kurta with floral embroidery.', 
      price:"6987",
      image: 'https://supertails.com/cdn/shop/files/Frame106723388_1.png?v=1711625532' 
    },
    { 
      name: 'Silk Blend Kurta', 
      description: 'Elegant silk blend kurta with a luxurious feel.', 
      price:"6522",
      image: 'https://imgs.search.brave.com/9W8WCiEDVkEzLDgqGacFwPFwVElsS6kmh1fo1M71TrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iYWJ5/bW9vLmluL2Nkbi9z/aG9wL3Byb2R1Y3Rz/LzFfZmIzOThiZGYt/Zjk0MC00NjFmLWJh/ZTYtMzE2MjcxNTQ0/YjE3LmpwZz92PTE3/MTk4NTU1Nzkmd2lk/dGg9MjAwMA' 
    },
    { 
      name: 'Casual Cotton Kurta', 
      description: 'Perfect for everyday wear in soft cotton fabric.', 
      price:"8955",
      image: 'https://imgs.search.brave.com/ZuYE6IC7RYATaWWUJC4y4aFc2divZatQzr2Umg_kUMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG92ZXRoZXdvcmxk/dG9kYXkuaW4vY2Ru/L3Nob3AvZmlsZXMv/bHR3dC1oYW5kbWFk/ZS1sdXh1cnkta2lk/cy10cmFkaXRpb25h/bC13ZWFyLmpwZz9j/cm9wPXJlZ2lvbiZj/cm9wX2hlaWdodD04/MDAmY3JvcF9sZWZ0/PTAmY3JvcF90b3A9/MTAwJmNyb3Bfd2lk/dGg9ODAwJnY9MTcy/NzM3MjI2MSZ3aWR0/aD04MDA' 
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
    <div className="kurtas-page">
      <h1 style={{marginTop:"100px",fontSize:"50px",color:"black"}}>Kurtas</h1>
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

export default KurtasPage;
