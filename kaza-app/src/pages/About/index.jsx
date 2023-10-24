// import colors from "../../utils/style/colors";
// import styled from "styled-components";
// import about from "../../datas/about.json";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import bannerAbout from "../../assets/about-background.png";

function About() {
  return (
    <div>
      <Header />
      <Banner imgSrc={bannerAbout} />
      {/* <div className="container">
        {about.map(({ id, text, title }) => (
          <StyledList>
            <Element key={id}>
              <Title>{title}</Title>
              <div>{text}</div>
            </Element>
          </StyledList>
        ))}
      </div> */}
      <Footer />
    </div>
  );
}

export default About;
