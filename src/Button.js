import React from "react";
import { useGlobalContext } from "./context";
const Button = () => {
  const { handleBtns, nbPages, page } = useGlobalContext();
  return (
    <div className="btn-container">
      <button className="btn" onClick={() => handleBtns("prev")}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button className="btn" onClick={() => handleBtns("next")}>
        next
      </button>
    </div>
  );
};
export default Button;
