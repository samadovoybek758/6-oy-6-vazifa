import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-[1200px] mx-auto p-5">
      <Navbar></Navbar>
      <div className="form">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
