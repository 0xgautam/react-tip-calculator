import React from "react";
import { useData } from "../context/Data";

export default function Output() {
  const { tip, total, handleReset } = useData();

  return (
    <div className="text-xs bg-very-dark-cyan w-11/12 rounded-2xl py-4 px-3  text-white lg:w-1/2 lg:flex lg:flex-col lg:justify-between">
      <div>
        <div className="mb-4 flex justify-between">
          <p>
            Tip Amount <br />
            <span className="text-dark-grayish-cyan-1">/ person</span>
          </p>
          <p className="text-primary text-xl font-black">
            $ {tip ? +tip.toFixed(2) : 0}
          </p>
        </div>
        <div className="mb-4 flex justify-between">
          <p>
            Total <br />
            <span className="text-dark-grayish-cyan-1">/ person</span>
          </p>
          <p className="text-primary text-xl font-black">
            $ {total ? total : 0}
          </p>
        </div>
      </div>
      <button
        className="bg-primary w-full p-2 rounded-lg text-very-dark-cyan text-base font-bold hover:bg-green-300 transition ease-in duration-100"
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </div>
  );
}
