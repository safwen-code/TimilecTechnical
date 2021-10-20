import ContactContext from "./contactContext.js";
import contactReducer from "./contactReducer";
import { v4 as uuidv4 } from "uuid";
import {
  GET_CONTACTS,
  UPDATE_CONTACT,
  DELET_CONTACT,
  SET_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CLEAR_CURRENT,
  ADD_CONTACT,
} from "./Types";

import { useReducer } from "react";

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
    current: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add contact
  const addContact = (Form) => {
    Form.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: Form });
  };
  //delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELET_CONTACT, payload: id });
  };
  // set Current contact
  const setCurrrentUser = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear current contact
  const clearCurrentUser = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //filter Contact
  //clear Filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current:state.current,
        addContact,
        deleteContact,
        setCurrrentUser,
        clearCurrentUser,
        updateContact
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
