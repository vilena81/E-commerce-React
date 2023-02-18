
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contacts from './Contacts';
import Header from './Header';

import Main from "./Main"
import Product from './Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/product/:id" element={<Product />} />
        
      </Routes>
      {/* <Main /> */}

    </div>
  );
}

export default App;
