import femaleProfile from "./images/woman-image.png";
import maleProfile from "./images/man-image.png";
const Employees = ({
  handleEmployeeCardClick,
  employees,
  handleTeamSelectionChange,
  selectedTeam,
}) => {
  return (
    <main className="container">
      <select onChange={handleTeamSelectionChange} value={selectedTeam}>
        <option value="TeamA">TeamA</option>
        <option value="TeamB">TeamB</option>
        <option value="TeamC">TeamC</option>
        <option value="TeamD">TeamD</option>
      </select>
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
