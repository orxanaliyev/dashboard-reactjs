import React, { useContext } from "react";
import "./Structure.scss";
import StructureContext from "../../StructureContext";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Manager from "../Manager/Manager";

function Structure() {
  const {
    data,
    toggleSectionCollapse,
    toggleDepartmentCollapse,
    toggleCEOCollapse,
  } = useContext(StructureContext);

  const Director = ({ department }) => {
    function toggleEmployee(event, id) {
      toggleDepartmentCollapse(id);
      event.stopPropagation();
    }

    return (
      <div
        className="col-md-6"
        onClick={(e) => toggleEmployee(e, department.id)}
      >
        {department.employees.map((employee, index) => (
          <EmployeeCard
            key={employee.name}
            id={department.id}
            avatar={employee.avatar}
            title={employee.title}
            name={employee.name}
            email={employee.email}
            structure={employee.structure}
            position={employee.position}
            numbers={employee.numbers}
          />
        ))}{" "}
        {department.collapsed
          ? department.sections.map((section, index) => (
              <Manager
                toggleSectionCollapse={toggleSectionCollapse}
                section={section}
                departmentId={department.id}
                key={index}
              />
            ))
          : null}
      </div>
    );
  };

  const toggleCEO = (evet) => {
    evet.stopPropagation();
    toggleCEOCollapse();
  };

  return (
    <div className="Structure container">
      <div className="row">
        <EmployeeCard
          avatar={data.avatar}
          title={data.title}
          name={data.name}
          email={data.email}
          structure={data.structure}
          position={data.position}
          numbers={data.numbers}
          toggleCEO={toggleCEO}
        />
        {data.collapsed
          ? data.departments.map((department, index) => (
              <Director key={index} department={department} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Structure;
