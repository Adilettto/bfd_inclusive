import styles from "./contactUs.module.scss";
import RequestForm from "../Form/RequestForm";

function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <div className={styles.contactUs__info}>
        <h2>Contact us</h2>
        <h3>Contact us for quick consultation</h3>
        <p>1-888-579-1240</p>
        <button className={styles.contactUs__callButton}>Call now</button>
      </div>
      <div>
        <RequestForm />
      </div>
    </div>
  );
}

export default ContactUs;
