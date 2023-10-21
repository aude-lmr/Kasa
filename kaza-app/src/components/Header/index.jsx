//import colors from "../../../utils/style/colors";
import { StyledLink } from "../../utils/style/shared-styles";
import Logo from "../../assets/LOGO.png";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <NavContainer>
      <img src={Logo} alt="Logo" />
      <nav>
        <div>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/About"> A Propos</StyledLink>
        </div>
      </nav>
    </NavContainer>
  );
}

export default Header;
