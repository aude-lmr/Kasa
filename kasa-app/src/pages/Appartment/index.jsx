import { useParams } from "react-router-dom";
import { useAppartment } from "../../hooks/useAppartment";
import { Collapse } from "../../components/Collapse";
import styled from "../Appartment/appartment.module.scss";

export const Appartment = () => {
  const { id } = useParams();
  const { appartment } = useAppartment(id);

  if (!appartment) {
    return null;
  }

  return (
    <>
      <div>
        <h1 className={styled.appartmentName}>{appartment.title}</h1>
        <p className={styled.location}>{appartment.location}</p>
      </div>
      <div className={styled.collapseContainer}>
        <Collapse title={"Description"} text={appartment.description} />
        <Collapse
          title={"Equipements"}
          text={appartment.equipments}
          className={styled.equipmentsList}
        />
      </div>
    </>
  );
};

export default Appartment;
