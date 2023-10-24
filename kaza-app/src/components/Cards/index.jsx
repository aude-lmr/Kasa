import { URL_APPARTMENT } from "../../routing/constants";
import styles from "./cards.module.scss";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <Link to={URL_APPARTMENT.replace(props.appartment.id)}>
      <div className={styles.card}>
        <div className={styles.overlayClass}></div>
        <img className={styles.Img} src={props.appartment.cover} alt="cover" />
        <h2 className={styles.title}>{props.appartment.title}</h2>
      </div>
    </Link>
  );
}

export default Cards;
