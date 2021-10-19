import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem.js";
import ContactContext from "../../../context/contextContact/contactContext";
const Contacts = (props) => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  console.log("contacts", contacts);
  return (
    <div className= "d-flex align-items-end flex-column bd-highlight mt-3  ">
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
