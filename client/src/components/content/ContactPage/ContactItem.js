import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FcAddressBook, FcCellPhone } from "react-icons/fc";
import ContactContext from "../../../context/contextContact/contactContext";
const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrrentUser, clearCurrentUser } = contactContext;
  const { id, name, email, phone, type } = contact;
  const HundelDelet = () => {
    deleteContact(id);
    console.log("delete id :", id);
    clearCurrentUser();
  };
  return (
    <div className="card bg-light  mb-3  " key={id}>
      <h6 className="text-dark pt-2 ms-2    ">
        {name}
        {"  "}
        <span
          class={`
            "badge"  ${
              type === "profesional" ? " bg-secondary" : "bg-success"
            }  rounded-2 ps-1 pe-1`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h6>
      <ul className="list ">
        {email && (
          <li>
            <FcAddressBook />
            {email}
          </li>
        )}
        {phone && (
          <li>
            <FcCellPhone />
            {phone}
          </li>
        )}
      </ul>
      <p className="lead ms-2">
        <button
          className="btn btn-dark btn-sm"
          type="button"
          onClick={() => setCurrrentUser(contact)}
        >
          Edite
        </button>
        <button
          className="btn btn-danger btn-sm"
          type="button"
          onClick={HundelDelet}
        >
          {" "}
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  type: PropTypes.string,
};

export default ContactItem;
