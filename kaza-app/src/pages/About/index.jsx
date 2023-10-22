import colors from "../../utils/style/colors";
import styled from "styled-components";
import about from "../../datas/about.json";
import bannerAbout from "../../assets/about-background.png";

const BannerAbout = styled.div`
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerAbout});
  background-size: cover;
  background-position: center;
  margin: 50px 0;
  height: 220px;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const StyledList = styled.ul`
  list-style: none;
  font-size: 25px;
  margin: 0;
  width: 80%;
`;

const Element = styled.li`
  padding: 25px 0;
`;

const Title = styled.button`
  border-radius: 10px;
  width: 100%;
  background: ${colors.primary};
  color: white;
  font-size: 25px;
  padding: 10px 0;
`;

function About() {
  return (
    <div>
      <BannerAbout />
      <Container>
        {about.map(({ id, text, title }) => (
          <StyledList>
            <Element key={id}>
              <Title>{title}</Title>
              <div>{text}</div>
            </Element>
          </StyledList>
        ))}
      </Container>
    </div>
  );
}

export default About;
