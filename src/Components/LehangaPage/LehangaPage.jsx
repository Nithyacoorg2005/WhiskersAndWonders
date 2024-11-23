import React, { useState, useRef } from 'react';
import './LehangaPage.css'

const LehengaPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Reference for scrolling to the form
  const formRef = useRef(null);

  const items = [
    { 
      name: 'Floral Embroidered Lehenga', 
      description: 'Beautiful floral embroidered lehenga .', 
      price:"8651",
      image: 'https://supertails.com/cdn/shop/files/Frame13025.png?v=1710582591' 
    },
    { 
      name: 'Silk Golden Lehenga', 
      description: 'Elegant silk lehenga with golden embellishments.',
      price:"5986", 
      image: 'https://imgs.search.brave.com/r8LfXN4TlZrGA1QIKff7Ewfu37ScS4pJ7e7QTA4Bq4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFPZVlWMjR3WUwu/anBn' 
    },
    { 
      name: 'Traditional Red Lehenga', 
      description: 'Traditional red bridal lehenga with intricate details.', 
      price:"5936",
      image: 'https://imgs.search.brave.com/I6pN9CL9CSImwavEbGgdUoyzCE-ZODdZEV_D2VlG5NQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2Fnci5haS9jZG4v/c2hvcC9wcm9kdWN0/cy9wYXdneS1wZXRz/LWxlaGVuZ2EtZm9y/LWRvZ3MtYW5kLWNh/dHMtMjAyODg5Lmpw/Zz92PTE2ODY2NTU0/MzAmd2lkdGg9MTQ0/NQ' 
    },
    { 
      name: 'Pastel Pink Lehenga', 
      description: 'Soft pastel pink lehenga with subtle embroidery.',
      price:"9895", 
      image: 'https://supertails.com/cdn/shop/files/Frame13019.png?v=1710582583' 
    },
    { 
      name: 'Royal Blue Lehenga', 
      description: 'Luxurious royal blue lehenga with heavy embroidery.', 
      price:"8765",
      image: 'https://imgs.search.brave.com/646RlzPKFW-biqCweqc_nrTJTyushO5IS5ALs7vZV5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIyNDI4Njg3L2Mv/MTQwMC8xNDAwLzAv/MTI1L2lsLzVlZmY4/Yy81NjI5NDA0NDQ3/L2lsXzYwMHg2MDAu/NTYyOTQwNDQ0N19h/bWQyLmpwZw' 
    },
    { 
        name: 'Royal Blue Lehenga', 
        description: 'Luxurious royal blue lehenga with heavy embroidery.', 
        price:"8965",
        image: 'https://imgs.search.brave.com/646RlzPKFW-biqCweqc_nrTJTyushO5IS5ALs7vZV5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIyNDI4Njg3L2Mv/MTQwMC8xNDAwLzAv/MTI1L2lsLzVlZmY4/Yy81NjI5NDA0NDQ3/L2lsXzYwMHg2MDAu/NTYyOTQwNDQ0N19h/bWQyLmpwZw' 
      },
      { 
        name: 'Royal Blue Lehenga', 
        description: 'Luxurious royal blue lehenga with heavy embroidery.',
        price:"9895", 
        image: 'https://imgs.search.brave.com/646RlzPKFW-biqCweqc_nrTJTyushO5IS5ALs7vZV5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIyNDI4Njg3L2Mv/MTQwMC8xNDAwLzAv/MTI1L2lsLzVlZmY4/Yy81NjI5NDA0NDQ3/L2lsXzYwMHg2MDAu/NTYyOTQwNDQ0N19h/bWQyLmpwZw' 
      }
  ];

  // Handle "Buy Now" click
  const handleBuyNow = () => {
    if (selectedSize) {
      setShowForm(true);
      setTimeout(() => formRef.current.scrollIntoView({ behavior: 'smooth' }), 100); // Smooth scroll to form
    } else {
      alert('Please select a size.');
    }
  };

  // Handle form submission and order confirmation
  const handleProceedToPay = () => {
    if (paymentMethod) {
      setOrderPlaced(true);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="lehenga-page">
      <h1 style={{marginTop:"100px",fontSize:"50px"}}>Lehengas</h1>
      <div style={{marginTop:"50px"}}className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <p>{item.name}</p>
            <h3>{item.description}</h3>
            <h1>${item.price}</h1>
            {/* Size Selection */}
            <label>Select Size: </label>
            <select onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="">Select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <br />
            <button style={{backgroundColor:"#ff5757",width:"150px",height:"38px",borderRadius:"10px"}} onClick={handleBuyNow}>Buy Now</button>
          </div>
        ))}
      </div>

      {/* Order form displayed below items */}
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

      {/* Order confirmation */}
      {orderPlaced && (
        <div className="order-success">
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your purchase. Your order will be processed shortly.</p>
        </div>
      )}
    </div>
  );
};

export default LehengaPage;
