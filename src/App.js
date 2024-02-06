import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Componant/Navbar/Navbar";
import Home from "./Componant/Pages/Home/Home";
import Sign_up from "./Componant/Pages/Sign_Up/Sign_up"; // Corrected component name
import Services from "./Componant/Pages/Services/Services";
import Products from "./Componant/Pages/Product/Products";
import Discover from "./Componant/Pages/Discover/Discover";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Sign-up" element={<Sign_up />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </Router>
  );
}

export default App;
