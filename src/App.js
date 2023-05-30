import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import 'animate.css';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element = {<Products/>} />
          <Route path="/contact" element = {<Contact/>} />
        </Routes >
    </div>
  );
}

export default App;
