import React, { useContext, useState } from "react";
import "./Menu.scss";
import StructureContext from "../../StructureContext";

function Menu() {
  const { data, toggleSectionCollapse, toggleDepartmentCollapse } = useContext(
    StructureContext
  );

  const MenuItem = ({ department }) => {
    const toggleMenu = (event, id) => {
      event.stopPropagation();
      toggleDepartmentCollapse(id);
    };

    return (
      <div
        className="Menu-item"
        onClick={(event) => toggleMenu(event, department.id)}
      >
        {department.title}{" "}
        {department.collapsed
          ? department.sections.map((section, index) => (
              <SubMenu
                section={section}
                departmentId={department.id}
                key={index}
              />
            ))
          : null}
      </div>
    );
  };

  const SubMenu = ({ departmentId, section }) => {
    const toggleSubMenu = (event) => {
      event.stopPropagation();
      toggleSectionCollapse(departmentId, section.id);
    };

    return (
      <div onClick={toggleSubMenu} className="Menu-Sub-item">
        {section.title}
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
      </div>
    );
  };

  const SubSubMenu = ({ position }) => {
    const toggleSubSubMenu = (event) => {
      event.stopPropagation();
    };
    return (
      <div
        className="Menu-Sub-Sub-item"
        onClick={(event) => toggleSubSubMenu(event)}
      >
        {position.title}
      </div>
    );
  };

  return (
    <div className="Menu">
      <h5>Struktur</h5>
      {data.departments.map((department, index) => (
        <MenuItem key={index} department={department} />
      ))}
    </div>
  );
}

export default Menu;
