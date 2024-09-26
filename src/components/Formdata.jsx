import React from "react";
import { brands, colors } from "../constants/Brand";

function Formdata() {
  function sub_form(e) {
    e.preventDefault()
    const res = new FormData(e.target);
    console.log(res.get("name"),res.get("brand"),res.get("color"));
  }

  return (
    <div className="grow ">
      <form className="form flex flex-col justify-center" onSubmit={sub_form}>
        <input
          name="name"
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-96 mx-auto mb-4 mt-6"
        />

        <select
          className="select select-primary w-full max-w-96 mx-auto mb-4"
          defaultValue={"Mashina brendini tanlang*"}
          name="brand"
        >
          {brands.map(function (brand) {
            return (
              <option key={brand} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>

        <select
          className="select select-primary w-full max-w-96 mx-auto mb-4"
          defaultValue={"Mashina rangini tanlang*"}
          name="color"
        >
          {colors.map(function (color) {
            return (
              <option key={color} value={color}>
                {color}
              </option>
            );
          })}
        </select>

        <button
          className="btn btn-accent w-96 mx-auto mb-32">
          Accent
        </button>
      </form>
    </div>
  );
}

export default Formdata;
