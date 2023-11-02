import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import bannerAbout from "../../assets/about-background.png";
import { Collapse } from "../../components/Collapse";
import styles from "../About/about.module.scss";
import body from "../../index.module.scss";

const aboutDatas = [
  {
    id: 1,
    title: "Fiabilité",
    text: "Les annonces postées sur Kaza garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équies.",
  },
  {
    id: 2,
    title: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: 3,
    title: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    id: 4,
    title: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.",
  },
];

function About() {
  return (
    <>
      <div className={body.bodyContainer}>
        <Header />
        <Banner imgSrc={bannerAbout} />
        <div className={styles.container}>
          {aboutDatas.map(({ id, text, title }) => (
            <Collapse key={id} title={title}>
              <p className={styles.collapseTxt}>{text} </p>
            </Collapse>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
