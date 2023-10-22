import housing from "../../datas/housing.json";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  justify-items: center;
`;

const Card = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

const CardTitle = styled.h2`
  font-weight: normal;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
`;

function Cards() {
  return (
    <CardsContainer>
      {housing.map(({ id, title }) => (
        <Card key={id}>
          <CardTitle>{title}</CardTitle>
        </Card>
      ))}
    </CardsContainer>
  );
}

export default Cards;
