import React from "react";
import Hero from "../src/components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import Collections from "./components/Collections";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div >
        <Navbar></Navbar>
        <div className="body">
          <Hero />
          <Collections />
          <Banner />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
