import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem.js";
import ContactContext from "../../../context/contextContact/contactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../../Layout/Spinner";

const Contacts = (props) => {
  const contactContext = useContext(ContactContext);
  const { contacts, filter, getcontacts, loading } = contactContext;

  useEffect(() => {
    getcontacts();
    //eslint-disable-next-line
  }, []);

  // if (contacts.length === 0) {
  //   return <div> Add contact please</div>;
  // }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filter !== null
            ? filter.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
