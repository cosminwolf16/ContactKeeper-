import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFiltered";
import ContactFiltered from "../contacts/ContactFiltered";

export const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFiltered />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
