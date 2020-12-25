import React from "react";
import Employee from "../Employee/Employee";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const Manager = ({ departmentId, section, toggleSectionCollapse }) => {
  const toggleSubEmployee = (event, id) => {
    event.stopPropagation();
    toggleSectionCollapse(departmentId, id);
    console.log(`sectionID ${id}`, `departmentID ${departmentId}`);
  };

  return (
    <div onClick={(e) => toggleSubEmployee(e, section.id)}>
      {section.employees.map((employee, index) => (
        <div key={index}>
          <EmployeeCard
            avatar={employee.avatar}
            title={employee.title}
            name={employee.name}
            email={employee.email}
            structure={employee.structure}
            position={employee.position}
            numbers={employee.numbers}
          />
        </div>
      ))}
      {section.collapsed
        ? section.positions.map((position, index) => (
            <Employee
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

export default Manager;
