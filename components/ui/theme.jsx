"use client";

import { useEffect, useState } from "react";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    setIsDarkMode(localStorage.theme === "dark");
  }, []);

  const handleThemeChange = (e) => {
    const theme = e.target.dataset.theme;
    const html = document.documentElement;
    if (theme === "dark") {
      html.dataset.theme = "dark";
      localStorage.theme = "dark";
      setIsDarkMode(true);
    } else {
      html.dataset.theme = "light";
      localStorage.theme = "light";
      setIsDarkMode(false);
    }
  };

  return (
    <div
      onClick={handleThemeChange}
      className="flex items-center overflow-hidden justify-center rounded-full dark:bg-gray-800 bg-gray-200"
    >
      <div
        data-theme={"light"}
        className={`p-2 cursor-pointer rounded-full px-4 hover:text-shadow-white ${!isDarkMode ? "bg-black text-white" : ""}`}
      >
        Light
      </div>
      <div
        data-theme={"dark"}
        className={`p-2 cursor-pointer rounded-full px-4 ${isDarkMode ? "bg-white text-black" : ""}`}
      >
        Dark
      </div>
    </div>
  );
};

export default Theme;
