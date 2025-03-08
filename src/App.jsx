import "./App.css";
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurPartners from "./components/OurPartners";
import Benefits from "./components/Benefits";
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Integrations from "./components/Integrations";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <div>
          <Hero />
          <OurPartners />
          <Benefits />
          <Integrations/>
          <Testimonials />
          <Faqs />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
