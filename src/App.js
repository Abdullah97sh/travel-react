import HeaderApp from "./components/Header/HeaderApp";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Login/Register";

function App() {
  return (
    <>
      {" "}
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<HeaderApp />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
