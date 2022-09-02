import { useState } from "react";
const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter(
      (employee) => employee.teamName === "გუნდი 1"
    );
    var teamA = {
      team: "გუნდი 1",
      members: teamAMembers,
      collapsed: selectedTeam === "გუნდი 1" ? false : true,
    };
    teams.push(teamA);

    var teamBMembers = employees.filter(
      (employee) => employee.teamName === "გუნდი 2"
    );
    var teamB = {
      team: "გუნდი 2",
      members: teamBMembers,
      collapsed: selectedTeam === "გუნდი 2" ? false : true,
    };
    teams.push(teamB);

    var teamCMembers = employees.filter(
      (employee) => employee.teamName === "გუნდი 3"
    );
    var teamC = {
      team: "გუნდი 3",
      members: teamCMembers,
      collapsed: selectedTeam === "გუნდი 3" ? false : true,
    };
    teams.push(teamC);

    var teamDMembers = employees.filter(
      (employee) => employee.teamName === "გუნდი 4"
    );
    var teamD = {
      team: "გუნდი 4",
      members: teamDMembers,
      collapsed: selectedTeam === "გუნდი 4" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }
  return (
    <main className="grouped-team">
      {groupedEmployees.map((item) => {
        return (
          <div
            style={{ cursor: "pointer" }}
            className="grouped-cont"
            key={item.team}
          >
            <h4 id={item.team} onClick={handleTeamClick}>
              გუნდის სახელი: {item.team}
            </h4>
            <div
              className={item.collapsed == true ? "collapsed" : "not-collapsed"}
              id={"collapse_" + item.team}
            >
              {item.members.map((member) => {
                return (
                  <div className="tito-wevri">
                    <h5>
                      <span>სახელი : {member.fullName}</span>
                    </h5>
                    <p>პოზიცია: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};
export default GroupedTeamMembers;
