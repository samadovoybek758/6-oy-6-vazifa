import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  function click_btn(e) {
    const res = new FormData(e.target);
    console.log(res.input_text);
  }
  return (
    <div className="w-[1200px] mx-auto p-5">
      <Navbar></Navbar>
      <div className="form flex flex-col justify-center">
        <input
          name="input_text"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-96 mx-auto mb-4 mt-6"
        />
        <select className="select select-primary w-full max-w-96 mx-auto mb-4">
          <option disabled selected>
            Copany
          </option>
          <option>BMW</option>
          <option>BUGATTI</option>
          <option>ROLS ROYS</option>
          <option>GENERAL MOTORS</option>
        </select>

        <select className="select select-primary w-full max-w-96 mx-auto mb-4">
          <option disabled selected>
            Cars
          </option>
          <option>gentra</option>
          <option>malinu</option>
          <option>trecker</option>
          <option>kaptiva</option>
        </select>
        <button className="btn btn-accent w-96 mx-auto mb-32" onClick={click_btn}>
          Accent
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
