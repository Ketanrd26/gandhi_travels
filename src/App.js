import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./comp/header/Header";
import Vehicels from "./pages/vehicels/Vehicels";
import Footer from "./comp/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import ScrollToTop from "../src/comp/scrolltotop/ScrollToTop";
import { useState, useEffect } from "react";
import Term from "./pages/Term";
import Privacy from "./pages/Privacy";

import BlogDetail from "./pages/blogdetails/BlogDetail";

function App() {
  const [vehicleDataTransfer, setVehicleDataTransfer] = useState(0);

  // Google Analytics setup
  useEffect(() => {
    // Add the analytics script to the <head>
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-X6DJNMBNBH";
    document.head.appendChild(script1);

    // Add the gtag initialization script
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-X6DJNMBNBH');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home setVehicleDataTransfer={setVehicleDataTransfer} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/vehicels"
            element={
              <Vehicels
                vehicleDataTransfer={vehicleDataTransfer}
                setVehicleDataTransfer={setVehicleDataTransfer}
              />
            }
          />
          <Route path="/blogs" element={<Blog />} />
          {/* <Route path="/blogs/:id" element={<BlogDetailPage />} /> */}

          <Route path="/contactus" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/term_conditions" element={<Term /> } />
          <Route path="/blogs/:slug" element={<BlogDetail />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
