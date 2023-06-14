import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import VR from "./components/VR";
import Creations from "./components/Creations";
import Footer from "./components/Footer";
import { useLayoutEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const HandleLoading = () => {
    setTimeout(() => setIsLoading(false), 1000);
  };

  useLayoutEffect(() => {
    window.onload = HandleLoading();
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Preloader key={1} />
      ) : (
        <div key={2} className="relative">
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
