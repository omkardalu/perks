"use client";
import { useState } from "react";
import TabOne from "./TabOne.jsx";
import TabTwo from "./TabTwo.jsx";
const ScrollSync = () => {
  const [currentScrollTop, setcurrentScrollTop] = useState();
  
  return (<div className="">
    <h1 className="font-black text-4xl p-2">Scorll Sync</h1>
    <section className="bg-gray-400 flex dark:text-black p-4 h-[70vh]  rounded m-2 shadow-[0_2px_6px_rgba(0,0,0,0.3),0_20px_30px_rgba(0,0,0,0.3)]">
      <TabOne currentScrollTop={currentScrollTop} setcurrentScrollTop={setcurrentScrollTop}/>
      <TabTwo currentScrollTop={currentScrollTop} setcurrentScrollTop={setcurrentScrollTop}/>
    </section>
  </div>
  );
};

export default ScrollSync;