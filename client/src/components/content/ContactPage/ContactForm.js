import React, { Fragment, useState, useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../../context/contextContact/contactContext";
const ContactForm = (props) => {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personel",
  });
  const contactContext = useContext(ContactContext);
  const { addContact } = contactContext;
  const { name, email, phone, type } = Form;
  const handelChange = (e) => {
    console.log("from hundelChange");
    setForm({ ...Form, [e.target.name]: e.target.value });
  };
  const handelClick = () => {
    console.log("from hundel click");
    console.log(Form);
    addContact(Form);
  };
  return (
    <form className="mt-3 border border-dark pt-3 me-3">
      <h4> Add Technical</h4>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => handelChange(e)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => handelChange(e)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          phone
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={(e) => handelChange(e)}
        />
      </div>
      <h5>Contact Type</h5>
      <Fragment>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            name="type"
            checked={type === "personel"}
            value="personel"
            onChange={(e) => handelChange(e)}
          />

          <label class="form-check-label" for="flexCheckDefault">
            Personel
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            name="type"
            value="profesional"
            checked={type === "profesional"}
            onChange={(e) => handelChange(e)}
          />

          <label class="form-check-label" for="flexCheckChecked">
            profesional
          </label>
        </div>
      </Fragment>
      <div>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => handelClick()}
        >
          Secondary
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
