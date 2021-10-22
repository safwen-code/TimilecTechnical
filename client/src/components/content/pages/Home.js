import React, { useContext, useEffect } from "react";
import Contacts from "../ContactPage/Contacts";
import ContactForm from "../ContactPage/ContactForm";
import ContactFiltred from "../ContactPage/ContactFiltred";
import AuthContext from "../../../context/ContextAuth/AuthContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { LoadUser } = authContext;
  useEffect(() => {
    LoadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="d-flex justify-content-between">
      <ContactForm />
      <div className="d-flex align-items-end flex-column bd-highlight mt-3">
        <ContactFiltred />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
