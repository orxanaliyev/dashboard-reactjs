import React, { useContext } from "react";
import "./Menu.scss";
import StructureContext from "../../StructureContext";
import MenuItem from "../MenuItem/MenuItem";

function Menu() {
  const { data, toggleSectionCollapse, toggleDepartmentCollapse } = useContext(
    StructureContext
  );

  return (
    <div className="Menu">
      <h5 className="py-2">Struktur</h5>
      <ul className="list-unstyled">
        {data.departments.map((department, index) => (
          <MenuItem
            key={index}
            department={department}
            toggleDepartmentCollapse={toggleDepartmentCollapse}
            toggleSectionCollapse={toggleSectionCollapse}
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
