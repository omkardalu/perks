"use client";

import { useEffect, useRef, useState } from "react";

const Editor = () => {
  const [code, setCode] = useState(undefined);
  const codeRef = useRef(null);

  useEffect(() => {
    const storedCode = localStorage.getItem("code");
    if (code === undefined && storedCode !== null) {
      setCode(JSON.parse(storedCode));
    }
  }, []);
  
  const handleKeyUp = (event) => {
    const newCode = event.target.innerText;
    setCode(newCode);
    localStorage.setItem("code", JSON.stringify(newCode));
  };
  
  return (
    <div>
      <h1 className=" px-4 font-bold">Code Mode</h1>
      <div className="flex flex-col justify-center">
        <code
          ref={codeRef}
          onKeyUp={handleKeyUp}
          contentEditable="true"
          className="bg-red-200 text-black p-4 m-4 rounded-lg"
          value={code}
        ></code> 
      </div>
    </div>
  );
};

export default Editor;
