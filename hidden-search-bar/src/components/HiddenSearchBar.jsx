import React, { useState } from "react";
import "../styles.css";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    if (e.target.classList.contains("container")) {
      setShowInput(false);
      setBgColor("white");
    }
  };

  const handleSearchClick = (e) => {
    e.stopPropagation();
    setShowInput(true);
    setBgColor("#1a1a1a");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (query) {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      <h1>Answers are just a search away.</h1>
      {showInput ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            onClick={(e) => e.stopPropagation()}
          />
          <p>Type Something And Press Enter To show The Magic....</p>
        </form>
      ) : (
        <>
          <h2>Click Me</h2>
          <FaSearch
            onClick={handleSearchClick}
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
        </>

      )}
      
    </section>
  );
};

export default HiddenSearchBar;
