import { useParams } from "react-router-dom";
import { useAppartment } from "../../hooks/useAppartment";

export const Appartment = () => {
  const { id } = useParams();
  const { appartment } = useAppartment(id);
  return (
    <>
      {appartment.map((house) => (
        <h1 house={house}>{house.title}</h1>
      ))}
    </>
  );
};

export default Appartment;
