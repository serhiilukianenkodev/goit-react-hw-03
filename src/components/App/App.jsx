import { useState } from "react";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

import defaultContacts from "../../data/defaultContacts.json";

function App() {
  const [contacts, setContacts] = useState(defaultContacts);
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.trim().toLocaleLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <SearchBox onChange={setFilter} filter={filter} />
      <ContactList contacts={filteredContacts} />
    </>
  );
}

export default App;
