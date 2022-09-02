const Teams = ({ selectedTeam, handleTeamSelectionChange }) => {
  return (
    <select onChange={handleTeamSelectionChange} value={selectedTeam}>
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  );
};
export default Teams;
