import React from "react";

const Menu = ({ visible }) => {
  return (
    <div className={visible ? "menu" : "hidden-menu"}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};
export default Menu;
