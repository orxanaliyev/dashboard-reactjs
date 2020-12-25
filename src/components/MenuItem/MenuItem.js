import React from "react";
import SubMenu from "../Submenu/Submenu";

// just for the design
const numbers = [
  {
    score: 421,
    color: "#826cfc",
    backgroundColor: "#f2f0fe",
    fontSize: "10px",
  },
  {
    score: 431,
    color: "#0085ff",
    backgroundColor: "#c0e8ff",
    fontSize: "10px",
  },
  {
    score: 432,
    color: "#54b806",
    backgroundColor: "#d7ffe2",
    fontSize: "10px",
  },
  {
    score: 111,
    color: "#d4a707",
    backgroundColor: "#fff9c7",
    fontSize: "10px",
  },
];

const MenuItem = ({
  department,
  toggleDepartmentCollapse,
  toggleSectionCollapse,
}) => {
  const toggleMenu = (event, id) => {
    event.stopPropagation();
    toggleDepartmentCollapse(id);
  };

  return (
    <li onClick={(event) => toggleMenu(event, department.id)}>
      <div className="Menu-item">
        <div>{department.title}</div>

        {numbers.map((num) => (
          <div key={num.score} style={{ ...num }}>
            {num.score}
          </div>
        ))}

        <div>
          {department.collapsed ? (
            <i className="fas fa-angle-up"></i>
          ) : (
            <i className="fas fa-angle-down"></i>
          )}
        </div>
      </div>

      {department.collapsed
        ? department.sections.map((section, index) => (
            <SubMenu
              toggleSectionCollapse={toggleSectionCollapse}
              section={section}
              departmentId={department.id}
              key={index}
            />
          ))
        : null}
    </li>
  );
};

export default MenuItem;
