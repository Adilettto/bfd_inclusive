import React from "react";
import styles from "./contactUs.module.scss";
import Input from "../UI/Input/Input";

function ContactUs() {
  const defaultData = {
    Name: "",
    Number: "",
    CompanyName: "",
    Email: "",
  };
  return (
    <div className={styles.contactUs}>
      <h1>Contact us</h1>
      <h2>Contact us for quick consultation</h2>
      <p>1-888-579-1240</p>
      <button className={styles.callButton}>Call now</button>

      <h1>Submit a request for fuel card</h1>
      <form>
        <Input
          label="Name"
          placeholder="BFD Chan"
        />
        <label htmlFor="name">Name</label>
        <input name="Name" placeholder="BFD Chan" />
        <label htmlFor="number">Number</label>
        <input name="Number" placeholder="+" />
        <label htmlFor="companyName">Company Name</label>
        <input name="CompanyName" placeholder="BFD" />
        <label htmlFor="email">Email</label>
        <input name="Email" placeholder="bfdfurl@gmail.com" />
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
