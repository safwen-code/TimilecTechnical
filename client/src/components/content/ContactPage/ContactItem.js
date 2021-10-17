import React from "react";
import PropTypes from "prop-types";
import { FcAddressBook, FcCellPhone } from "react-icons/fc";

const ContactItem = ({ contact: { id, name, email, phone, type } }) => {
  return (
    <div className="card bg-light" key={id}>
      <h3 className="text-dark text-end">
        {name}
        <span
          class={`
            "badge"  ${type === "profesional" ? "bg-success" : "bg-danger"}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
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
      <p>
        <button className="btn btn-dark btn-sm" type="button">
          Edite
        </button>
        <button className="btn btn-danger btn-sm" type="button">
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
