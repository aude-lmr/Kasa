import { StyledLink } from "../../utils/style/shared-styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import styled from "./header.module.scss";
import { URL_HOMEPAGE } from "../../routing/constants";

function Header() {
  return (
    <div className={styled.navContainer}>
      <Link to={URL_HOMEPAGE}>
        <img src={Logo} alt="Logo" />
      </Link>
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
