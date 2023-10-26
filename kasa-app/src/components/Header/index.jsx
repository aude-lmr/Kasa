import { StyledLink } from "../../utils/style/shared-styles";
import Logo from "../../assets/LOGO.png";
import styled from "./header.module.scss";

function Header() {
  return (
    <div className={styled.navContainer}>
      <img src={Logo} alt="Logo" />
      <nav>
        <div>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/About"> A Propos</StyledLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
