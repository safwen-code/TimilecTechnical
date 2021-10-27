import React, { Fragment, useState, useContext, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import ContactContext from "../../../context/contextContact/contactContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { current, addContact, clearCurrentContact, updateContact } =
    contactContext;

  const [contact, setcontact] = useState({
    name: "",
    email: "",
    type: "personel",
    phone: "",
  });
  const { name, email, type, phone } = contact;
  let history = useHistory();

  useEffect(() => {
    if (current !== null) {
      setcontact(current);
    } else {
      setcontact({
        name: "",
        email: "",
        phone: "",
        type: "personel",
      });
    }
    //eslint-disable-next-line
  }, [contactContext, current]);

  function HundelChange(e) {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  }
  const HundelClick = (e) => {
    e.preventDefault();
    console.log(contact);
    if (current === null) {
      addContact(contact);
      history.push("/");
    } else {
      updateContact(contact);
    }
    clearAll();
  };
  const clearAll = () => {
    console.log("hello from clear errors");
    clearCurrentContact();
    setcontact({
      name: "",
      email: "",
      phone: "",
      type: "personel",
    });
  };

  return (
    <form className="mt-3 border border-dark pt-3 me-3">
      <h4> {current ? "Edite Technical" : "Add Technical"} </h4>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => HundelChange(e)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => HundelChange(e)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          phone
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={(e) => HundelChange(e)}
        />
      </div>
      <h5>Contact Type</h5>
      <Fragment>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            name="type"
            checked={type === "personel"}
            value="personel"
            onChange={(e) => HundelChange(e)}
          />

          <label className="form-check-label" for="flexCheckDefault">
            Personel
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            name="type"
            value="profesional"
            checked={type === "profesional"}
            onChange={(e) => HundelChange(e)}
          />

          <label className="form-check-label" for="flexCheckChecked">
            profesional
          </label>
        </div>
      </Fragment>
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={(e) => HundelClick(e)}
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

export default withRouter(ContactForm);
