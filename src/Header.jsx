const Header = ({ teamMemberCount, selectedTeam }) => {
  return (
    <header>
      <h1>გუნდის წევრების განაწილება</h1>
      <h2>
        {selectedTeam}: {teamMemberCount} წევრი
      </h2>
    </header>
  );
};
export default Header;
