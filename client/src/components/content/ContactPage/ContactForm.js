import React, { Fragment, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../../context/contextContact/contactContext";
const ContactForm = (props) => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, clearCurrentUser, current } =
    contactContext;

  useEffect(() => {
    if (current !== null) {
      setForm(current);
    } else {
      setForm({
        name: "",
        email: "",
        phone: "",
        type: "personel",
      });
    }
  }, [contactContext, current]);
  const [Form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personel",
  });
  const { name, email, phone, type } = Form;
  const HundelChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };
  const HundelClick = () => {
    if (current) {
      updateContact(Form);
    } else {
      addContact(Form);
    }
    clearAll()
  };
  const clearAll = () => {
    clearCurrentUser();
  };
  return (
    <form className="mt-3 border border-dark pt-3 me-3">
      <h4> {current ? "Edite Technical" : "Add Technical"} </h4>
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
          onChange={(e) => HundelChange(e)}
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
          onChange={(e) => HundelChange(e)}
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
          onChange={(e) => HundelChange(e)}
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
            onChange={(e) => HundelChange(e)}
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
            onChange={(e) => HundelChange(e)}
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
          onClick={() => HundelClick()}
        >
          {current ? "Edite " : "Add "}
        </button>
        <button type="button" className="btn btn-danger" onClick={clearAll}>
          {" "}
          clear All
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
