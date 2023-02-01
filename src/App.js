import React from "react";
import "./App.css";
import "./common.css";
import "react-image-gallery/styles/css/image-gallery.css";

import NavBar from "./Components/NavBar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
