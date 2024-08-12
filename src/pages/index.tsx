import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className={`${poppins.className}`}>
      <div
        className={
          "flex justify-center items-center w-screen h-screen dark:bg-slate-800 theme-transition"
        }
      >
        <div className="max-w-[400px] max-h-[400px] mx-4 p-8 rounded shadow border bg-white dark:bg-slate-700 dark:border-slate-700 md:mx-0 theme-transition">
          <div className="flex justify-between items-center mb-3">
            <h1 className=" font-bold text-2xl text-slate-800 dark:text-white theme-transition">
              Lorem ipsum
            </h1>
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-full bg-slate-200 text-slate-800`}
            >
              {dark ? <FaMoon /> : <FaRegSun />}
            </button>
          </div>
          <p className="text-justify text-slate-500 dark:text-slate-300 theme-transition">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam
            voluptas error totam iure odio consectetur hic sint qui quisquam?
            Sunt corporis quia animi, nulla ratione repudiandae hic quidem iure!
          </p>
          <button
            className="w-full bg-slate-800 text-white py-2 rounded mt-6 shadow theme-transition"
            onClick={() => setDark(!dark)}
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}
