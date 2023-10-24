import { Link } from "react-router-dom";
import Header from "../Header";
import { URL_HOMEPAGE } from "../../routing/constants";
import styled from ".//NotFound.module.scss";

function Error() {
  return (
    <>
      <Header />
      <div className={styled.container}>
        <h1 className={styled.error}>404</h1>
        <h2 className={styled.message}>
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link className={styled.Link} to={URL_HOMEPAGE}>
          Retour sur la page d'accueil
        </Link>
      </div>
    </>
  );
}

export default Error;
