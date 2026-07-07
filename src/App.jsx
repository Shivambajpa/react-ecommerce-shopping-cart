import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Login from "./pages/Login";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setIsOpen={setIsOpen} />

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div
        style={{
          marginTop: "70px",
          minHeight: "100vh",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;