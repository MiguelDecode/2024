import { useEffect } from "react";
import { useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [darkMode]);

  return (
    <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">
          Social Media Dashboard
        </h1>
        <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6">
          Total Followers: 23,004
        </p>
        <hr className="mb-[19px] bg-Very-Dark-Blue dark:bg-Desaturated-Blue" />
        <div className="flex justify-between">
          <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">
            Dark Mode
          </p>
          <label
            htmlFor="theme"
            className="cursor-pointer inline-flex items-center"
          >
            <input
              type="checkbox"
              id="theme"
              className="sr-only peer"
              onClick={handleTheme}
            />
            <div className="relative w-11 h-6 bg-Dark-Grayish-Blue dark:bg-Toggle-Gradient rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white dark:after:bg-Dark-Grayish-Blue after:rounded-full after:h-5 after:w-5 after:transition-all dark:peer:bg-Toggle-Gradient"></div>
          </label>
        </div>
      </div>
    </header>
  );
};
