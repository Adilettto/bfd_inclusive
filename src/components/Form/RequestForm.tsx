import React, { useState } from "react";
import styles from "./RequestForm.module.scss";

function Form() {
  const [formData, setFormData] = useState({
    Name: "",
    Number: "",
    CompanyName: "",
    Email: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className={styles.f}>
        <form className={styles.f__form} onSubmit={onSubmitHandler}>
          <h1>Submit a request for fuel card</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="Name"
            placeholder="BFD Chan"
            value={formData.Name}
            onChange={onChangeHandler}
          />
          <label htmlFor="number">Number</label>
          <input
            type="text"
            name="Number"
            placeholder="+"
            value={formData.Number}
            onChange={onChangeHandler}
          />
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            name="CompanyName"
            placeholder="BFD"
            value={formData.CompanyName}
            onChange={onChangeHandler}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="Email"
            placeholder="bfdfurl@gmail.com"
            value={formData.Email}
            onChange={onChangeHandler}
          />

          <button className={styles.f__button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
