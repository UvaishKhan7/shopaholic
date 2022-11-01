import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Checkout from './components/Checkout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
