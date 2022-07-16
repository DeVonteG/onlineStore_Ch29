// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import Cart from "./components/cart";
import Admin from "./components/admin";
import GlobalState from "./context/globalState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
};

export default App;
