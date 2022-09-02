const Teams = ({ selectedTeam, handleTeamSelectionChange }) => {
  return (
    <select onChange={handleTeamSelectionChange} value={selectedTeam}>
      <option value="გუნდი 1">გუნდი 1</option>
      <option value="გუნდი 2">გუნდი 2</option>
      <option value="გუნდი 3">გუნდი 3</option>
      <option value="გუნდი 4">გუნდი 4</option>
    </select>
  );
};
export default Teams;
