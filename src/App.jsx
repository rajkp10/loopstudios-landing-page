import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import VR from "./components/VR";
import Creations from "./components/Creations";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => setIsLoading(false), 1000);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Preloader key={1} />
      ) : (
        <div key={2}>
          <Hero />
          <VR />
          <Creations />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
