const Footer = () => {
  var today = new Date();
  return (
    <div className="footer-container">
      <hr></hr>
      <footer>
        <h4>
          ყველა უფლება დაცულია {today.getFullYear()} © badonix development
        </h4>
      </footer>
    </div>
  );
};
export default Footer;
