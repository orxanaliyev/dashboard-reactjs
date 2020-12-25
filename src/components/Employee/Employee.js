import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const Employee = ({ position }) => {
  return (
    <div>
      {position.employees.map((employee, index) => (
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
    </div>
  );
};

export default Employee;
