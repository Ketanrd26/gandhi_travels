import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./comp/header/Header";
import Vehicels from "./pages/vehicels/Vehicels";
import Footer from "./comp/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import BlogDetailPage from "./pages/blogdetails/BlogDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicels" element={<Vehicels />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetailPage/>} />
          <Route path="/contactus" element={<Contact />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
