//import { housing } from "../../datas/housing.json";
import styled from "styled-components";
import banner from "../../assets/home-background.png";

const Banner = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-blend-mode: darken;
  background-position: center;
  border-radius: 30px;
  margin: 50px 0;
  height: 240px;
  text-align: center;
  font-size: 70px;
  padding: 20px;
`;

const Text = styled.p`
  color: #ffffff;
`;

function Home() {
  return (
    <Banner>
      <Text>Chez vous, partout et ailleurs</Text>
    </Banner>
  );
}

export default Home;
