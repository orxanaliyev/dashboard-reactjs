import React, { useContext } from "react";
import "./Structure.scss";
import StructureContext from "../../StructureContext";
import viewIcon from "../../data/img/icons/view.png";
import mailToIcon from "../../data/img/icons/mail-to.png";
import { Link } from "@reach/router";

function Structure() {
  const {
    data,
    toggleSectionCollapse,
    toggleDepartmentCollapse,
    toggleCEOCollapse,
  } = useContext(StructureContext);

  const EmployeeCard = (props) => {
    console.log(props.id);

    return (
      <div
        className={`Employee-Card mx-auto mb-5 ${props.id ? `mx-5` : ``}`}
        onClick={toggleCEO}
      >
        <div>
          <div className="Employee-Card-header">
            <div>
              <img
                src={props.avatar}
                width={63}
                alt="avatar"
                className="rounded-circle"
              />
            </div>
            <div>
              <div className="py-3">
                <h6 className="p-0 m-0">{props.name}</h6>
                <span>{props.email}</span>
              </div>
              <div className="d-flex p-1 flex-direction-row justify-content-between">
                {props.numbers.map((num) => (
                  <span
                    key={num.score}
                    style={{ color: num.color, backgroundColor: num.bgColor }}
                    className="_score"
                  >
                    {num.score}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="Employee-Card-container">
            <div className="text-center sides border-right">
              <span>Struktur </span>
              <h6>{props.structure}</h6>
            </div>
            <div className="text-center sides">
              <span>Vəzifə </span>
              <h6>{props.position}</h6>
            </div>
          </div>

          <div className="Employee-Card-footer">
            <Link to="/details" className="footer-btn">
              <img src={viewIcon} alt="view" /> Bax
            </Link>
            <button className="footer-btn">
              <img src={mailToIcon} alt="mail-to" />
              Mail at
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Director = ({ department }) => {
    const toggleEmployee = (event, id) => {
      event.stopPropagation();
      toggleDepartmentCollapse(id);
    };

    return (
      <div onClick={(event) => toggleEmployee(event, department.id)}>
        {department.employees.map((employee, index) => (
          <EmployeeCard
            key={employee.numbers}
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
                section={section}
                departmentId={department.id}
                key={index}
              />
            ))
          : null}
      </div>
    );
  };

  const Manager = ({ departmentId, section }) => {
    const toggleSubEmployee = (event, id) => {
      event.stopPropagation();
      toggleSectionCollapse(id);
    };

    // if (!section.collapsed) {
    //   return null;
    // }

    return (
      <div onClick={toggleSubEmployee}>
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

  const toggleCEO = (evet) => {
    evet.stopPropagation();
    toggleCEOCollapse();
  };

  return (
    <div className="Structure">
      <EmployeeCard
        avatar={data.avatar}
        title={data.title}
        name={data.name}
        email={data.email}
        structure={data.structure}
        position={data.position}
        numbers={data.numbers}
      />
      {data.collapsed
        ? data.departments.map((department, index) => (
            <Director key={index} department={department} />
          ))
        : null}
    </div>
  );
}

export default Structure;
