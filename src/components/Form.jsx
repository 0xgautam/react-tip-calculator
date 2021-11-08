import React, { useState } from "react";
import iconDollar from "../assets/icon-dollar.svg";
import iconPerson from "../assets/icon-person.svg";
import { useData } from "../context/Data";

const tips = [5, 10, 15, 25, 50, "Custom"];

export default function Form() {
  const {
    handleBillChange,
    handleTipPercentChange,
    handelPeopleNumChange,
    peopleNum,
    bill,
    tipPercent,
  } = useData();

  const [custom, setCustom] = useState(false);

  return (
    <form className="lg:w-6/12 lg:pr-8">
      <div className="mb-6">
        <label
          htmlFor="bill"
          className="text-sm font-medium text-dark-grayish-cyan-1 block mb-2"
        >
          Bill
        </label>
        <div className="p-1 rounded-lg flex justify-between items-center w-full border focus-within:border-primary">
          <img src={iconDollar} alt="dollar icon" />
          <input
            type="number"
            step="any"
            id="bill"
            className="text-very-dark-cyan rounded-lg focus:outline-none block w-full p-2.5 text-right font-black"
            placeholder="0"
            value={bill ? bill : ""}
            min="0"
            onChange={(e) => handleBillChange(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="tip"
          className="text-sm font-medium text-dark-grayish-cyan-1 block mb-2"
        >
          Select Tip %
        </label>
        <div className="grid overflow-hidden grid-cols-2 grid-rows-3 gap-2 lg:grid-cols-3 lg:grid-rows-2">
          {tips.map((tip, index) => (
            <div
              className={`
              ${
                tip === "Custom"
                  ? "box-custom"
                  : "box hover:bg-green-300 hover:text-very-dark-cyan transition ease-in duration-100"
              } ${
                tipPercent === tip && tip !== "Custom"
                  ? "bg-primary text-very-dark-cyan"
                  : "bg-very-dark-cyan text-white"
              } flex items-center justify-center cursor-pointer`}
              key={index}
              onClick={() =>
                tip !== "Custom" ? handleTipPercentChange(tip) : null
              }
            >
              {tip === "Custom" ? (
                <>
                  <div
                    className={`${
                      !custom || tip !== "Custom" ? "hidden" : "block"
                    } p-1 rounded-lg flex justify-between items-center w-full border focus-within:border-primary`}
                  >
                    <input
                      type="number"
                      step="any"
                      className="text-very-dark-cyan rounded-lg focus:outline-none block w-full p-2.5 text-right font-black"
                      placeholder="0"
                      value={tipPercent ? tipPercent : ""}
                      min="0"
                      onChange={(e) => handleTipPercentChange(e.target.value)}
                      required
                    />
                    %
                  </div>
                  <p
                    className={
                      custom || tip !== "Custom"
                        ? "hidden"
                        : "block cursor-pointer"
                    }
                    onClick={() => setCustom((custom) => !custom)}
                  >
                    {tip} %
                  </p>
                </>
              ) : (
                <p onClick={() => setCustom(false)}>{tip} %</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="peopleNum"
          className="text-sm font-medium text-dark-grayish-cyan-1 block mb-2"
        >
          Number Of People
        </label>
        <div className="p-1 rounded-lg flex justify-between items-center w-full border focus-within:border-primary">
          <img src={iconPerson} alt="Person icon" />
          <input
            type="number"
            id="peopleNum"
            className="text-very-dark-cyan rounded-lg focus:outline-none block w-full p-2.5 text-right font-black"
            placeholder="0"
            min="0"
            value={peopleNum ? peopleNum : ""}
            onChange={(e) => handelPeopleNumChange(e.target.value)}
            required
          />
        </div>
      </div>
    </form>
  );
}
