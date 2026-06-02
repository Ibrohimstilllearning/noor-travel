import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home  from "./Home";
import Footer from "./Footer";
import Package from "./package_page/Package";
import Detail from "./package_page/Detail";

export default function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/details-package/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>

  );
}