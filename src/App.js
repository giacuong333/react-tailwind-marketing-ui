import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Everything from "./components/Everything";
import Tech from "./components/Tech";
import Build from "./components/Build";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Blog from "./components/Blog";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Everything />
                <Tech />
                <Build />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/404" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
