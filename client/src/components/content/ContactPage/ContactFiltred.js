import React, { useRef, useContext, useEffect } from "react";
import ContactContext from "../../../context/contextContact/contactContext";
const ContactFiltred = () => {
  const contactContext = useContext(ContactContext);
  const { filtredContact, clearFiltred, filter } = contactContext;

  const text = useRef("");
  useEffect(() => {
    if (filter === null) {
      text.current.valueOf = "";
    }
  }, [filter]);
  const hundelFiltred = (e) => {
    if (text.current.valueof !== "") {
      filtredContact(e.target.value);
    } else {
      clearFiltred();
    }
  };
  return (
    <div className="mb-2">
      <input
        className=""
        ref={text}
        type="text"
        placeholder="contact nae please"
        onChange={hundelFiltred}
      />
    </div>
  );
};

export default ContactFiltred;
