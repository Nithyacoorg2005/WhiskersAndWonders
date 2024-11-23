import React from 'react';
import './TermsAndConditions.css'
import { FaShieldAlt, FaLock, FaFileContract } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <div style={{marginTop:"100px"}} className="terms-conditions-page">
      <h1 style={{fontSize:"50px",color:"black"}}>Terms and Conditions</h1>

      <section className="section">
        <FaShieldAlt size={40} className="icon" />
        <h2>User Responsibilities</h2>
        <p>
          By using our website, you agree to maintain the confidentiality of your account information and restrict access
          to your account. You are responsible for any actions taken through your account. 
        </p>
        <img src="https://images.pexels.com/photos/790033/pexels-photo-790033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User Responsibility" />
      </section>

      <section className="section">
        <FaLock size={40} className="icon" />
        <h2>Privacy Policy</h2>
        <p>
          We value your privacy and strive to protect your personal information. For details, please read our Privacy Policy.
        </p>
        <img  src="https://images.pexels.com/photos/12188471/pexels-photo-12188471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" controls></img>
      </section>

      <section className="section">
        <FaFileContract size={40} className="icon" />
        <h2>Terms of Service</h2>
        <p>
          All content provided on our website is for informational purposes only. We make no representations for the
          accuracy or completeness of any information.
        </p>
        <img src="https://images.pexels.com/photos/4072686/pexels-photo-4072686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Terms of Service" />
      </section>

      <section className="section">
        <h2>Refund Policy</h2>
        <p>
          Refund requests must be submitted within 30 days of the purchase. Refunds will be granted at our discretion.
        </p>
        <img src="https://images.pexels.com/photos/12198529/pexels-photo-12198529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Refund Policy" />
      </section>

      <section className="section">
        <h2>Limitation of Liability</h2>
        <p>
          In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages.
        </p>
        <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Limitation of Liability" />
      </section>
    </div>
  );
};

export default TermsAndConditions;
