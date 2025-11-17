"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Settings = ({settings, setSettings}) => {

  const colorRef = useRef();
  const bgcolorRef = useRef();
  const fontRef = useRef();
  const router = useRouter();
  useEffect(() => {
    colorRef.current.value=settings.color;
    bgcolorRef.current.value=settings.color;
    fontRef.current.value=settings.font;
  },[settings])
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setSettings(Object.fromEntries(data));    
    router.replace("tabsync?tab=editor")
  };

  return (
    <div>
      <h1 className="text-2xl px-4">Settings</h1>
      <div className="flex flex-col justify-center">
        <form  className="flex flex-col gap-2 my-2 p-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="font">Font:</label>
            <select ref={fontRef} id="font" name="font" className="bg-black">
              <option value="sans-serif">sans serif</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="cursive">cursive</option>
              <option value="Arial">Arial</option>
            </select>
          </div>
          <div>
            <label htmlFor="color">color:</label>
            <input ref={colorRef} id="color"name="color" type="color" />
          </div>
          <div>
            <label htmlFor="bgcolor">background color:</label>
            <input ref={bgcolorRef} id="bgcolor"name="bgcolor" type="color" />
          </div>
          <div>
            <button className="bg-blue-500 px-3 py-2 m-2 rounded " type="submit">Save</button>
          </div>
        </form>
      </div>
      </div>
  );
};

export default Settings;
