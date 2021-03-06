import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { structureData } from "./data/structure";
import StructureContext from "./StructureContext";
import { Router } from "@reach/router";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";

function App() {
  const [data, setData] = useState(structureData);

  const toggleCEOCollapse = () => {
    setData({
      ...data,
      collapsed: true,
    });
  };

  const toggleDepartmentCollapse = (id) => {
    setData({
      ...data,
      collapsed: true,
      departments: data.departments.map((department) => {
        if (department.id === id) {
          return { ...department, collapsed: !department.collapsed };
        } else {
          return department;
        }
      }),
    });
  };

  const toggleSectionCollapse = (departmentId, sectionId) => {
    setData({
      ...data,
      departments: data.departments.map((department) => {
        if (departmentId === department.id) {
          const newSections = department.sections.map((section) => {
            if (section.id === sectionId) {
              return { ...section, collapsed: !section.collapsed };
            } else {
              return section;
            }
          });

          return { ...department, sections: newSections };
        } else {
          return department;
        }
      }),
    });
  };

  return (
    <>
      <Header />
      <Sidebar />
      <StructureContext.Provider
        value={{
          data,
          toggleDepartmentCollapse,
          toggleSectionCollapse,
          toggleCEOCollapse,
        }}
      >
        <Router>
          <Main path="/" />
          <Details path="/details" />
        </Router>
      </StructureContext.Provider>
    </>
  );
}

export default App;
