import React from "react";
import Developers from "./components/Developers";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import Governance from "./components/Governance";
import Main from "./components/Main";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Ecosystem/>
      <Developers/>
      <Governance/>
      <Footer/>
    </div>
  );
}

export default App;
