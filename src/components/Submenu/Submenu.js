import React from "react";
import SubSubMenu from "../SubSubMenu/SubSubMenu";

const SubMenu = ({ departmentId, section, toggleSectionCollapse }) => {
  const toggleSubMenu = (event) => {
    event.stopPropagation();
    toggleSectionCollapse(departmentId, section.id);
  };

  return (
    <ul className=" list-unstyled">
      <li onClick={toggleSubMenu}>
        <div className="Menu-Sub-item">
          <div>{section.title}</div>
          <div style={{ color: "#826cfc", fontSize: "10px" }}>312</div>
          <div style={{ color: "#0085ff", fontSize: "10px" }}>412</div>
          <div>
            {section.collapsed ? (
              <i className="fas fa-angle-up"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )}
          </div>
        </div>
      </li>
      <ul className="list-unstyled">
        {section.collapsed
          ? section.positions.map((position, index) => (
              <SubSubMenu
                key={index}
                position={position}
                departmentId={departmentId}
                sectionId={section.id}
              />
            ))
          : null}
      </ul>
    </ul>
  );
};

export default SubMenu;
