import "./App.css";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ProductData from './ProductData'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const burgers = ProductData

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/products" element={<Products burgers={burgers}/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
