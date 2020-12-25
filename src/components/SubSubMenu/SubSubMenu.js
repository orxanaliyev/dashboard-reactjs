import React from "react";

const SubSubMenu = ({ position }) => {
  const toggleSubSubMenu = (event) => {
    event.stopPropagation();
  };
  return (
    <li onClick={(event) => toggleSubSubMenu(event)}>
      <div className="Menu-Sub-Sub-item">{position.title}</div>
    </li>
  );
};

export default SubSubMenu;
