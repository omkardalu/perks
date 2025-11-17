"use client";
import Header from "./Header.jsx";
import Editor from "./Editor.jsx";
import Preview from "./Preview.jsx";
import Settings from "./Settings.jsx";
import { useSearchParams } from "next/navigation.js";
import { useEffect, useRef, useState } from "react";

const TabSyncHome = () => {
  const currentTab = useSearchParams().get("tab");
  const [settings, setSettings] = useState({font:"sans serif",color:"#ffffff", bgcolor:"#000000bc"});
  const containerRef = useRef();
  useEffect(()=>{
    containerRef.current.style.fontFamily = settings.font;
    containerRef.current.style.color = settings.color;
    containerRef.current.style.backgroundColor = settings.bgcolor;
  },[settings]);
  return (
    <section className="w-full">
      <h1 className="text-2xl font-bold p-4">Tab Sync Home</h1>

      <div ref={containerRef} className={`text-white p-4 rounded m-2 shadow-[0_2px_6px_rgba(0,0,0,0.3),0_20px_30px_rgba(0,0,0,0.3)]`}>
        <Header/>
        <main>
          {currentTab === "editor" && <Editor />}
          {currentTab === "preview" && <Preview />}
          {currentTab === "settings" && <Settings setSettings={setSettings} settings={settings} />}
        </main>
      </div>

    </section>
  );
};

export default TabSyncHome;
