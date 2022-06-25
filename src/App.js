
import './App.css';
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products"
import ProductDetails from "./components/ProductsDetails";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
