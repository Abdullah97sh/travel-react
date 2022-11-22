import HeaderApp from "./components/Header/HeaderApp";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Login/Register";
import Footer from "./components/Footer/Footer";
import Fav from "./components/Favorite";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactF from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HeaderApp />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/contact" element={<ContactF />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
