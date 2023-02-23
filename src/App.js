
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Contacts from './Contacts';
// import Data from './Data';
import Header from './Header';
import Main from "./Main"
import Product from './Product';
import Footer from './Footer';
import Basket from './Basket'
import About from './About'
import { useState } from 'react';

function App() {
  
  const [card, setCard]=useState([])
  function addToCard(product){
    setCard([...card,product])
  }

  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path="/" element={<Main addToCard={addToCard} />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket card={card} />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
