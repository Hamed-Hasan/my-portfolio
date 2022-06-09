import React, { useState } from "react";
import "./ScrollToTop.css";
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        type="button"
        className="scroll-button bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br first-line:focus:ring-amber-300  shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/80 text-white bg-amber-700 hover:bg-amber-800 focus:ring-0 focus:outline-none focus:ring-blue-0 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
