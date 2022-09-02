const Footer = () => {
  var today = new Date();
  return (
    <>
      <hr></hr>
      <footer>
        <h4>
          ყველა უფლება დაცულია {today.getFullYear()} © badonix development
        </h4>
      </footer>
    </>
  );
};
export default Footer;
