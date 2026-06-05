import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home  from "./Home";
import Footer from "./Footer";
import Package from "./package_page/Package";
import Detail from "./package_page/Detail";
import AboutUs from "./About";
import Contact from "./Contact";

export default function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/details-package/:id" element={<Detail />} />
        <Route path="/about-us" element ={<AboutUs />} />
        <Route path="/contact" element ={<Contact />} />
      </Routes>
      <Footer />
    </div>

  );
}