"use client";
import { useState } from "react";
import TabOne from "./TabOne.jsx";
import TabTwo from "./TabTwo.jsx";
const ScrollSync = () => {
  const [currentScrollTop, setcurrentScrollTop] = useState();
  
  return (<div>
    <h1 className="font-black text-4xl">Scorll Sync</h1>
    <section className="bg-gray-400 flex  p-4 h-[70vh] rounded m-2">
      <TabOne currentScrollTop={currentScrollTop} setcurrentScrollTop={setcurrentScrollTop}/>
      <TabTwo currentScrollTop={currentScrollTop} setcurrentScrollTop={setcurrentScrollTop}/>
    </section>
  </div>
  );
};

export default ScrollSync;