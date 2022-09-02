import femaleProfile from "./images/woman-image.png";
import maleProfile from "./images/man-image.png";
import Teams from "./Teams";
const Employees = ({
  handleEmployeeCardClick,
  employees,
  handleTeamSelectionChange,
  selectedTeam,
}) => {
  return (
    <main className="container">
      <Teams
        selectedTeam={selectedTeam}
        handleTeamSelectionChange={handleTeamSelectionChange}
      />
      <div className="card-container">
        {employees.map((employee) => {
          return (
            <div
              className={
                employee.teamName === selectedTeam
                  ? "card chrdili"
                  : "card arachrdili"
              }
              onClick={handleEmployeeCardClick}
              id={employee.id}
              key={employee.id}
            >
              {employee.gender === "female" ? (
                <img src={femaleProfile} className="card-img" />
              ) : (
                <img src={maleProfile} className="card-img"></img>
              )}
              <div className="card-body">
                <h5 className="card-title">{employee.fullName}</h5>
                <p className="card-text">{employee.designation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Employees;
