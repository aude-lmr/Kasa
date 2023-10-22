import Cards from "../../components/Cards";
import styled from "styled-components";
import bannerHome from "../../assets/home-background.png";

const BannerHome = styled.div`
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerHome});
  background-size: cover;
  background-position: center;
  margin: 50px 0;
  height: 220px;
  padding: 20px;
  position: relative;
`;

const BackgroundFilter = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: brightness(0.8) contrast(100%);
  border-radius: 30px;
`;

const Text = styled.h1`
  color: #ffffff;
  font-size: 60px;
  font-weight: normal;
  z-index: 1;
`;

function Home() {
  return (
    <div>
      <BannerHome>
        <BackgroundFilter />
        <Text>Chez vous, partout et ailleurs</Text>
      </BannerHome>
      <Cards />
    </div>
  );
}

export default Home;
