import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-container">
      <Navbar setPage={setPage} />
      
      <main className="main-content">
        {page === "home" && <Hero />}
        {page === "about" && <About />}
        {page === "services" && <Services />}
        {page === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
