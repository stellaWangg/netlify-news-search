import React from "react";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { query, searchFunc } = useGlobalContext();
  return (
    <nav>
      <div className="navbar">
        <p className="nav-info">hacker news 🔍</p>
        <input
          type="text"
          value={query}
          onChange={(e) => searchFunc(e.target.value)}
        />
      </div>
    </nav>
  );
};
export default Navbar;
