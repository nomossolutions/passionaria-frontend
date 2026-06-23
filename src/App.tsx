import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Catalog from "./components/Catalog";
import Benefits from "./components/Benefits";
import Recipes from "./components/Recipes";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Catalog />
      <Benefits />
      <Recipes />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
