import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import styled from "./header.module.scss";
import { URL_HOMEPAGE } from "../../routing/constants";

function Header() {
  return (
    <div className={styled.navContainer}>
      <Link to={URL_HOMEPAGE}>
        <img src={Logo} alt="Logo" className={styled.logo} />
      </Link>
      <nav>
        <div>
          <Link
            className={`${styled.headerLink} ${styled.spaceBetweenLink}`}
            to="/"
          >
            Accueil
          </Link>

          <Link className={styled.headerLink} to="/About">
            {" "}
            A Propos
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
