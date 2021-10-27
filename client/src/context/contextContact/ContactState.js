import ContactContext from "./contactContext.js";
import contactReducer from "./contactReducer";

import {
  UPDATE_CONTACT,
  DELET_CONTACT,
  SET_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CLEAR_CURRENT,
  ADD_CONTACT,
  GET_CONTACTS,
  ERR_CONTACT,
  CLEAR_CONTACTS,
} from "./Types";
import axios from "axios";
import { useReducer } from "react";

const ContactState = ({ children }) => {
  const initialState = {
    contacts: null,
    current: null,
    filter: null,
    errors: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //get All Contact
  const getcontacts = async () => {
    try {
      let res = await axios.get("/contacts/");
      console.log("get All contact", res.data);
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (err) {
      // dispatch({ type: ERR_CONTACT, payload: err.response.data.error });
      console.log(err.msg);
    }
  };

  //Add contact
  const addContact = async (Form) => {
    // Form.id = uuidv4();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/contacts/", Form, config);
      console.log("la res de post contact", res.data);

      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      console.log(error.response.msg);
      dispatch({ type: ERR_CONTACT, payload: error.response.msg });
    }
  };

  //delete contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`/contacts/${id}`);
      dispatch({ type: DELET_CONTACT, payload: id });
    } catch (error) {
      dispatch({ type: ERR_CONTACT, payload: error.response.msg });
    }
    dispatch({ type: DELET_CONTACT, payload: id });
  };
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };
  // set Current contact
  const setCurrrentContact = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear current contact
  const clearCurrentContact = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update contact
  const updateContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let res = await axios.put(`/contacts/${contact._id}`, contact, config);
      console.log("la res de update ", res.data);
      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (err) {
      console.error(err.msg);
      dispatch({ type: ERR_CONTACT, payload: err.response.message });
    }
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //filter Contact
  const filtredContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };
  //clear Filter
  const clearFiltred = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        loading: state.loading,
        contacts: state.contacts,
        current: state.current,
        filter: state.filter,
        errors: state.errors,
        addContact,
        deleteContact,
        setCurrrentContact,
        clearCurrentContact,
        updateContact,
        filtredContact,
        clearFiltred,
        getcontacts,
        clearContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
