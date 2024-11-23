import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage';
import Why from './Components/Why/Why';
import './App.css'
import FeaturedCats from './Components/FeaturedCats/FeaturedCats';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Footer/Footer';
import AdoptPage from './Components/AdoptPage/AdoptPage';
import FoodMarketplace from './Components/FoodMarketplace/FoodMarketplace';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import BlogPage from './Components/BlogPost/BlogPage';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import BellsAndTagsPage from './Components/BellsAndTagsPage/BellsAndTagsPage';
import LehengaPage from './Components/LehangaPage/LehangaPage';
import TshirtsAndShirtsPage from './Components/TshirtsAndShirtsPage/TshirtsAndShirtsPage';
import KurtasPage from './Components/KurtasPage/KurtasPage';
import JacketsAndSweatersPage from './Components/JacketsAndSweatersPage/JacketsAndSweatersPage';
import FleasAndTicksPage from './Components/FleasAndTicksPage/FleasAndTicksPage';
import DeodorantsPage from './Components/DeodrantsPage/DeodrantsPage';
import TrimmersPage from './Components/TrimmersPage/TrimmersPage';
import CatProfileUpdate from './Components/CatProfileUpdate/CatProfileUpdate';
import CatCare from './Components/CatCare/CatCare';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
// import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';


const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Example: Sending form data to your backend
    fetch("/api/adopt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        catName: cat.name,
        price: cat.price,
      }),
    }).then((response) => {
      if (response.ok) {
        alert(`Adoption request sent for ${cat.name}!`);
        closeModal();
      }
    });
  };
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Function to update cart items (for increment, decrement, or remove)
  const updateCart = (item, quantity) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        )
      );
    }
  };
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<><HomePage/><Why/><FeaturedCats/><Testimonial/><Footer/></>}/>
      <Route path="/adopt" element={<><AdoptPage/><Footer/></>}/>
  
      <Route
          path="/cats"
          element={<><FoodMarketplace addToCart={addToCart} /><Footer/></>}
        />
        <Route
          path="/cart"
          element={<><Cart cartItems={cartItems} updateCart={updateCart} /><Footer/></>}
        />
        <Route path="/blogs" element={<><BlogPage/><Footer/></>}/>
        <Route path="/about" element={<><AboutUs/><Footer/></>}/>
        <Route path="/contactus" element={<><ContactUs/><Footer/></>}/>
        <Route path="/bells" element={<><BellsAndTagsPage/><Footer/></>}/>
        <Route path="/lehanga" element={<><LehengaPage/><Footer/></>}/>
        <Route path="/tshirtsandshirts" element={<><TshirtsAndShirtsPage/><Footer/></>}/>
        <Route path="/kurthas" element={<><KurtasPage/><Footer/></>}/>
        <Route path="/js" element={<><JacketsAndSweatersPage/><Footer/></>}/>
        <Route path="/ft" element={<><FleasAndTicksPage/><Footer/></>}/>
        <Route path="/deo" element={<><DeodorantsPage/><Footer/></>}/>
        <Route path="/trimmers" element={<><TrimmersPage/></>}/>
        <Route path="/catp" element={<><CatProfileUpdate/></>}/>
        <Route path="/catcare" element={<><CatCare/></>}/>
        <Route path="/terms" element={<><TermsAndConditions/><Footer/></>}/>
         {/* <Route path="/privacyp" element={<><PrivacyPolicy/><Footer/></>}/> */}
        
      
  

    </Routes>
    </BrowserRouter>
    
   

      
    </>
  )
}

export default App
