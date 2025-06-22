import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Footer from './components/Footer';
import Sale from './pages/Sale';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductState from './context/ProductState';
import Gadgets from './pages/Gadgets';
import Fashion from './pages/Fashion';
import Makeup from './pages/Makeup';
import Grocery from './pages/Grocery';
import Homedecor from './pages/Homedecor';
import Cartitems from './pages/Cartitems';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddProduct from './pages/AddProduct';

function App() {
  const[text, setText] = useState("dark mode");
  const [mode, setMode] = useState("light");

  const toggleMode = (e) => {
    e.preventDefault();
    if (mode == dark) {
      setMode("light");
      setText("dark mode");
    } else {
      setMode("dark");
      setText("light mode");
    }
  };


  return (
    <>
    <ProductState>
    <Router>
      <Navbar 
      mode = {mode}
      text = {text}
      toggleMode = {toggleMode}
      />
      <Routes>
      <Route path="/" element= {<Home />} />
      <Route path='/sale' element= {<Sale />} />
      <Route path='/about-us' element= {<About />} />
      <Route path='/contact-us' element= {<Contact />} />
      <Route path='/gadgets' element= {<Gadgets />} />
      <Route path='/fashion' element= {<Fashion />} />
      <Route path='/makeup' element= {<Makeup />} />
      <Route path='/groceries' element= {<Grocery />} />
      <Route path='/homedecor' element= {<Homedecor />} />
      <Route path='/cart-items' element= {<Cartitems />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/add-product" element={<AddProduct />} />

      
        
      </Routes>
      <Footer 
      mode = {mode}
      />

    </Router>

    </ProductState>
    </>
  )
}

export default App
