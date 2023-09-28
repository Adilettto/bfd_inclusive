import GetDiscount from "../../components/GetDiscount/GetDiscount";
import Exports from "../../components/Exports/Exports";
import ContactUs from "../../components/ContactUs/ContactUs";
import NavBar from "../../components/NavBar/NavBar";
import Advantage from "../../components/Advantage/Advantage";
import AboutCards from "../../components/AboutCards/AboutCards";
import Main from "../../components/Main";
import styles from "./HomePage.module.scss";
import Faq from "../../components/Faq/Faq";

const Homepage = () => {
  return (
    <div className={styles.home}>
      <NavBar />
      <Main />
      <Advantage />
      <GetDiscount />
      <AboutCards />
      <Faq />
      <Exports />
      <ContactUs />
    </div>
  );
};

export default Homepage;
