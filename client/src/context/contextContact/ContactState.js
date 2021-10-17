import ContactContext from "./contactContext.js";
import contactReducer from "./contactReducer";
import {
  GET_CONTACTS,
  UPDATE_CONTACT,
  DELET_CONTACT,
  SET_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CLEAR_CURRENT,
} from "./Types";

import { useState, useReducer } from "react";

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "safwen",
        phone: "22589415",
        email: "safwendjebbi@gmail.com",
        type: "profesional",
      },
      {
        id: 2,
        name: "safwen",
        phone: "22589415",
        email: "siwar@gmail.com",
        type: "personal",
      },
      {
        id: 3,
        name: "safwen",
        phone: "22589415",
        email: "hakima@gmail.com",
        type: "profesional",
      },
      {
        id: 4,
        name: "safwen",
        phone: "22589415",
        email: "beha@gmail.com",
        type: "personal",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add contact
  //delete contact
  // set Current contact
  //Clear current contact
  //update contact
  //filter Contact
  //clear Filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
