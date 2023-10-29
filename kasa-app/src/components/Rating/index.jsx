import starFull from "../../assets/star-full.svg";
import starEmpty from "../../assets/star-empty.svg";
import styled from "../Rating/rating.module.scss";

function Rating({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={styled.ratingWrapper}>
      {stars.map((rate, index) =>
        score >= rate ? (
          <img key={`${rate}-${index}`} src={starFull} alt="note" />
        ) : (
          <img key={`${rate}-${index}`} src={starEmpty} alt="note" />
        )
      )}
    </div>
  );
}

export default Rating;
