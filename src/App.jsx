import "./App.css"
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/sitewide/Navbar";
import FooterComponent from "./components/sitewide/Footer";
import NotFoundPage from "./components/sitewide/NotFoundPage";
import CoursePage from "./components/course/CoursePage";
import LandingPage from "./components/home/LandingPage";
import OrderPage from "./components/order/OrderPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/capstone" element={<CoursePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
