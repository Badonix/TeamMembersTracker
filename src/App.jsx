import "./App.css";
import * as React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";
function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "ლაშა ნოზაძე",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "გუნდი 1",
    },
    {
      id: 2,
      fullName: "ნინო აბულაძე",
      designation: "Node Developer",
      gender: "female",
      teamName: "გუნდი 1",
    },
    {
      id: 3,
      fullName: "მარიამ კვარაცხელია",
      designation: "Java Developer",
      gender: "female",
      teamName: "გუნდი 1",
    },
    {
      id: 4,
      fullName: "ნიკა ხუციშვილი",
      designation: "React Developer",
      gender: "male",
      teamName: "გუნდი 2",
    },
    {
      id: 5,
      fullName: "გოჩა მიქელაძე",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "გუნდი 2",
    },
    {
      id: 6,
      fullName: "ანა ბაირამოვი",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "გუნდი 2",
    },
    {
      id: 7,
      fullName: "მამუკა შენგელია",
      designation: "Angular Developer",
      gender: "male",
      teamName: "გუნდი 3",
    },
    {
      id: 8,
      fullName: "თაკო ტაბატაძე",
      designation: "API Developer",
      gender: "female",
      teamName: "გუნდი 3",
    },
    {
      id: 9,
      fullName: "მაია დიასამიძე",
      designation: "C++ Developer",
      gender: "female",
      teamName: "გუნდი 3",
    },
    {
      id: 10,
      fullName: "ზაზა აბაშიძე",
      designation: "Python Developer",
      gender: "male",
      teamName: "გუნდი 4",
    },
    {
      id: 11,
      fullName: "ანდრია ბერიძე",
      designation: "Vue Developer",
      gender: "male",
      teamName: "გუნდი 4",
    },
    {
      id: 12,
      fullName: "ილია მამედოვი",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "გუნდი 4",
    },
  ]);
  const [selectedTeam, setSelectedTeam] = useState("გუნდი 1");
  function handleTeamSelectionChange(e) {
    console.log(e.target.value);
    setSelectedTeam(e.target.value);
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
    <div className="App">
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Employees
        handleEmployeeCardClick={handleEmployeeCardClick}
        employees={employees}
        handleTeamSelectionChange={handleTeamSelectionChange}
        selectedTeam={selectedTeam}
      />
      <Footer />
    </div>
  );
}

export default App;
