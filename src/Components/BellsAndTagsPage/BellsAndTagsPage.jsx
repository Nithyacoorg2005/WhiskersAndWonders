import React, { useState } from 'react';
import './BellsAndTagsPage.css'

const BellsAndTagsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const items = [
    { 
      name: 'Trixie Metal Bell (Gold)', 
      description: 'Shiny golden bell with a clear sound.', 
      image: "https://supertails.com/cdn/shop/products/Frame1_a3b9b6ba-aad3-49cf-b0bc-290041e5948d_1.png?v=1696622142" ,
      price:"$107"
    },
    { 
      name: 'Trixie Orange Bell(Orange)', 
      description: 'Tickless Ultrasonic Tick and Flea Repeller Pendants', 
      image: 'https://supertails.com/cdn/shop/files/Frame106723258.png?v=1715759235' 
    },
    { 
        name: 'Trixie Metal Bell  (Purple)', 
        description: 'Tickless Ultrasonic Tick and Flea Repeller Pendants', 
        image: 'https://supertails.com/cdn/shop/files/Image_1_1_1ca0d78e-ec76-46bd-9733-1129cb19e644.png?v=1698057412' 
      },
      { 
        name: 'Trixie Metal Bell(Red)', 
        description: 'Tickless Ultrasonic Tick and Flea Repeller Pendants', 
        image: 'https://supertails.com/cdn/shop/files/1_29_1.png?v=1696622219' 
      },
      { 
        name: 'Trixie Metal Bell (Blue)', 
        description: 'Tickless Ultrasonic Tick and Flea Repeller Pendants', 
        image: 'https://supertails.com/cdn/shop/files/Frame-2023-07-29T105210.234.png?v=1698057408' 
      },
      { 
        name: 'Trixie Metal Bell (Sliver)', 
        description: 'Tickless Ultrasonic Tick and Flea Repeller Pendants', 
        image: 'https://supertails.com/cdn/shop/files/fetcher_1.png?v=1709647518' 
      },
      { 
        name: 'Mitag Anti Loss Device with Collar', 
        description: ' for Cats (Green) (freebie)', 
        image: 'https://supertails.com/cdn/shop/files/Frame344684722.png?v=1719426013' 
      },

  ];


  const handleBuyNow = () => {
    setShowForm(true);
  };


  const handleProceedToPay = () => {
    if (paymentMethod) {
      setOrderPlaced(true);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="bells-and-tags-page">
      <h1 style={{marginTop:"100px",fontSize:"50px"}}>Bells and Tags</h1>
      <div className="items-grid">
        {items.map((item, index) => (
          <div style={{marginTop:"50px"}}key={index} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <p>{item.name}</p>
            <h1>{item.description}</h1>
            <p>{item.price}</p>
            <button style={{backgroundColor:"#ff5757",borderRadius:"10px",width:"130px",height:"38px"}} onClick={handleBuyNow}>Buy Now</button>
          </div>
        ))}
      </div>

    
      {showForm && !orderPlaced && (
        <div className="order-form">
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

            <h3>Select Payment Method</h3>
 
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

export default BellsAndTagsPage;
