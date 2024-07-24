import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Everything from "./components/Everything";
import Tech from "./components/Techs";
import Build from "./components/Build";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Blog from "./components/Blog";
import Error from "./components/404";

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
