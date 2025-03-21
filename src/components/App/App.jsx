import { useEffect, useState } from "react";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import saveToLs from "../../utils/saveToLs";
import getFromLs from "../../utils/getFromLs";

import defaultContacts from "../../assets/data/defaultContacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = getFromLs("contacts");

    return savedContacts && savedContacts.length !== 0
      ? savedContacts
      : defaultContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    saveToLs("contacts", contacts);
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.trim().toLocaleLowerCase());
  });

  const addNewContact = (newContact) => {
    setContacts((prewContacts) => [...prewContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prewContacts) =>
      prewContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <SearchBox onFilter={setFilter} filter={filter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
