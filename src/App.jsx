import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electric/ivy" element={<SingleProduct />} />
         <Route path="/electric/ace" element={<SingleProduct />} />
        <Route path="/accessories" element={<h1>Accessories</h1>} />
        <Route path="/stores" element={<h1>Stores</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        {/* add more pages here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
