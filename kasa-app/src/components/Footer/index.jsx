import FooterLogo from "../../assets/FOOTER-LOGO.png";
import Notice from "../../assets/notice.png";

function Footer() {
  return (
    <div>
      <img src={FooterLogo} alt="Logo" />
      <img src={Notice} alt="Legal notice" />
    </div>
  );
}

export default Footer;
