"use client";

import { useEffect, useState } from "react";

const exacuteCode = (code) => {
  try {
    return eval(code);
  } catch (error) {
    return "Error in code execution: " + error.message;
  }
};

const Preview = () => {
  const [code, setCode] = useState(undefined);
  let output = "";

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("code"));
    setCode(response);
  }, []);

  console.log = function (...args) {
    output = args.join(" ") + "\n";
  };

  if (typeof code === "undefined") {
    output = "No output";
  }

  exacuteCode(code);

  return (
    <div>
      <h1 className="font-bold">Privew Mode</h1>
      <div className="flex flex-col justify-center">
        <code className="bg-red-200 text-black p-4 m-4 rounded-lg">
          {output}
        </code>
      </div>
    </div>
  );
};

export default Preview;
