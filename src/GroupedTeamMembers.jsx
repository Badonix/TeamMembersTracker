import { useState } from "react";
const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    var teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    var teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    var teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    var teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    var teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    var teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    var teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
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
    <main class="grouped-team">
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
