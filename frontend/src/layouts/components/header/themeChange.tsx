import React, { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export default function ThemeChange() {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (pref: string) => {
    if (pref === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    } else if (pref === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else if (pref === "system") {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme("system");
    }
  };
  return (
    <div className="themeChange">
      <div className="current-theme btn btn-active-light-primary">
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </div>
      <div className="theme-options">
        <div
          className={`theme-option ${theme === "light" ? "active" : null}`}
          onClick={() => handleThemeChange("light")}
        >
          <span className="icon">
            <BsSun />
          </span>{" "}
          Light
        </div>
        <div
          className={`theme-option ${theme === "dark" ? "active" : null}`}
          onClick={() => handleThemeChange("dark")}
        >
          <span className="icon">
            <BsMoon />
          </span>{" "}
          Dark
        </div>
        <div
          className={`theme-option ${theme === "system" ? "active" : null}`}
          onClick={() => handleThemeChange("system")}
        >
          <span className="icon">
            <HiOutlineComputerDesktop />
          </span>{" "}
          System
        </div>
      </div>
    </div>
  );
}
