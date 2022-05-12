import React from "react";

function Nav({ items }) {
  return (
    <div className="nav">
      {items.map((elem) => (
        <button className="nav__elem">{elem}</button>
      ))}
    </div>
  );
}

export default Nav;
