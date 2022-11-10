import React from "react";

import IntroSection from "./components/intro/Intro";
import ContactSection from "./components/contact-section/ContactSection";
import DisclaimerSection from "./components/disclaimer/Disclaimer";
import FooterSection from "./components/footer/Footer";

import "./App.css";
import Map from "./components/Map/Map";

function App() {
  const location = {
    address: "V752+P63, Rue Sidi Zid, Tunis.",
    lat: 10.2506,
    lng: 36.8594,
  };

  return (
    <div className="App">
      <IntroSection />

      <div>
        <Map location={location} zoomLevel={17} />
      </div>

      <ContactSection />
      <DisclaimerSection />
      <FooterSection />
    </div>
  );
}

export default App;
