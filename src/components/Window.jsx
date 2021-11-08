import React from "react";
import Form from "./Form";
import Output from "./Output";

export default function Window() {
  return (
    <div className="w-full bg-white rounded-t-2xl p-6 lg:flex lg:justify-between lg:w-3/4 lg:mx-auto lg:rounded-2xl shadow-2xl">
      <Form />
      <Output />
    </div>
  );
}
