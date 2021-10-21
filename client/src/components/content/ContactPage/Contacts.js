import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem.js";
import ContactContext from "../../../context/contextContact/contactContext";
const Contacts = (props) => {
  const contactContext = useContext(ContactContext);
  const { contacts, filter } = contactContext;
  console.log("contacts", contacts);
  if (contacts.length === 0) {
    return <div> Add contact please</div>;
  }
  return (
    <Fragment>
      {filter !== null ? (
        filter.map((contact) => (
          <ContactItem contact={contact} key={contact.id} />
        ))
      ) : (
        <div className="  ">
          {contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
