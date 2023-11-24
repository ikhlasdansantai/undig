import { useState, useRef, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import Bride from "./components/sections/bride/bride";
import Location from "./components/sections/location/location";
import Documentation from "./components/sections/documentation/documentation";
import WriteMsg from "./components/sections/writeMsg/writeMsg";
import DigitalEnvelope from "./components/sections/digital-envelope/digitalEnvelope";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import lagunya from "/Nothing's Gonna Change My Love For You - Westlife.mp3";

function App() {
  const [open, setOpen] = useState(true);
  const ref = useRef(null);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (open) {
      playAudio();
    } else {
      // stopAudio();
    }
  }, [open]);

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollTop = () => {
    setOpen(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Header onClick={scrollTop} state={open} setState={setOpen} />
      <audio ref={audioRef} src={lagunya} autoPlay={open} />
      <main id="main" className="bg-primary relative z-50" ref={ref}>
        <Bride state={open} setState={setOpen} />
        <Location />
        <Documentation />
        <WriteMsg />
        <DigitalEnvelope />
        <Footer />
      </main>
    </div>
  );
}

export default App;
