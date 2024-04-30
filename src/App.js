import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProfilePage from "./pages/Profile";
import Address from "./pages/Address";
import Orders from "./pages/Orders";
import HomePage from "./pages/HomePage";
import Men from "./pages/Men";
import Women from "./pages/Women";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
          <Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/Profile" element={<ProfilePage />}></Route>
            <Route path='/footer' element={<Footer/> }></Route>
            <Route path="/navbar" element={<NavBar />}></Route>
            <Route path="/address" element={<Address />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/men" element={<Men />}></Route>
            <Route path="/women" element={<Women />}></Route>
            <Route path="/about" element={<AboutUs />} /> {/* add a route for the About Us page */}
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
