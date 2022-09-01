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
        <option value="გუნდი 1">გუნდი 1</option>
        <option value="გუნდი 2">გუნდი 2</option>
        <option value="გუნდი 3">გუნდი 3</option>
        <option value="გუნდი 4">გუნდი 4</option>
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
