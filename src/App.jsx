import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Formdata from "./components/Formdata";

function App() {
  
  return (
    <div className="w-[1200px] mx-auto p-5">
      <Navbar></Navbar>
      <Formdata/>
      <Footer />
    </div>
  );
}

export default App;
