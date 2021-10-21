import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem.js";
import ContactContext from "../../../context/contextContact/contactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = (props) => {
  const contactContext = useContext(ContactContext);
  const { contacts, filter } = contactContext;
  console.log("contacts", contacts);
  if (contacts.length === 0) {
    return <div> Add contact please</div>;
  }
  return (
    <Fragment>
<TransitionGroup>
      {filter !== null
        ? filter.map((contact) => (
            <CSSTransition key={contact.id} timeout={500} classNames="item">
              <ContactItem contact={contact} />
            </CSSTransition>
          ))
        : contacts.map((contact) => (
            <CSSTransition key={contact.id} timeout={500} classNames="item">
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
    </TransitionGroup>
    </Fragment>
    
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
