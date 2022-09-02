import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";
import Nav from "./Nav";
import NotFound from "./NotFound";
import GroupedTeamMembers from "./GroupedTeamMembers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "ლაშა ნოზაძე",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "ნინო აბულაძე",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "მარიამ კვარაცხელია",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "ნიკა ხუციშვილი",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "გოჩა მიქელაძე",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "ანა ბაირამოვი",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "მამუკა შენგელია",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "თაკო ტაბატაძე",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "მაია დიასამიძე",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "ზაზა აბაშიძე",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "ანდრია ბერიძე",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "ილია მამედოვი",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );
  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(e) {
    setTeam(e.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }
  return (
    <Router>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                selectedTeam={selectedTeam}
                teamMemberCount={
                  employees.filter(
                    (employee) => employee.teamName === selectedTeam
                  ).length
                }
              />
              <Employees
                handleEmployeeCardClick={handleEmployeeCardClick}
                employees={employees}
                handleTeamSelectionChange={handleTeamSelectionChange}
                selectedTeam={selectedTeam}
              />
            </>
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <>
              <Header
                selectedTeam={selectedTeam}
                teamMemberCount={
                  employees.filter(
                    (employees) => employees.teamName === selectedTeam
                  ).length
                }
              />
              <GroupedTeamMembers
                employees={employees}
                selectedTeasm={selectedTeam}
                setTeam={setTeam}
              />
            </>
          }
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
