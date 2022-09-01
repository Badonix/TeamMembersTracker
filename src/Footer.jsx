const Footer = () => {
  var today = new Date();
  return (
    <>
      <hr></hr>
      <footer>
        <h4>გუნდის წევრების განაწილების აპლიკაცია - {today.getFullYear()} ©</h4>
      </footer>
    </>
  );
};
export default Footer;
