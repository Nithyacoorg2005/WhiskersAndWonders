import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/image.png'; // Update with your logo path
import './Navbar.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolling(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'active' : ''}`}></div>
          <div className={`line ${isOpen ? 'active' : ''}`}></div>
          <div className={`line ${isOpen ? 'active' : ''}`}></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/adopt">Adopt cat</Link>
            
          </li>
          <li><Link to="/cats">Food MarketPlace</Link>
          
          </li>
          <li><h5 style={{textTransform:"capitalize"}}>CAT SHOP</h5>
          <ul className="dropdown">
            <h5>Cat Grooming</h5>
            <li><Link to="/ft">Fleas And Ticks</Link></li>
            <li><Link to="/deo">Deodrants</Link></li>
            <li><Link to="/trimmers">Trimmers</Link></li>
            
            <h5>Cats Clothing</h5>
            <li><Link to="/bells">Bells and Tags</Link></li>
            <li><Link to="/kurthas">Kurthas</Link></li>
            <li><Link to="/tshirtsandshirts">Tshirts and Shirts</Link></li>
            <li><Link to="/lehanga">Lehangas</Link></li>
            <li><Link to="/js">Jackets and Sweaters</Link></li>
          </ul>
          </li>
          <li><Link to="/blogs">Blogs</Link></li>

         
         
          <li><Link to="/contactus">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/catp">Your Cat Profile</Link></li>
          <li><Link to="/catcare">Cat Care</Link></li>
          
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
