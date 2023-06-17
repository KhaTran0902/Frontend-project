import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import "animate.css";
import ListNor from "./pages/products/ListNor";
import Cart from "./pages/cart/Cart";
import ListHigh from "./pages/products/ListHigh";
import Accesories from "./pages/products/ListAcces";
import Pay from "./pages/pay/Pay";
import Details from "./pages/detail/Detail";
import { Toaster } from "react-hot-toast";
import About from "./pages/about/About";
function App() {
  return (
    <div className="App">
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} exact />
        <Route path="/products/zipponor" element={<ListNor />} />
        <Route path="/products/zippohighends" element={<ListHigh />} />
        <Route path="products/accesories" element={<Accesories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element= {<About/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/products/:id" element={<Details />} />
      </Routes>
    
    </div>
  );
}

export default App;
