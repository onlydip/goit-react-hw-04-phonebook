import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import ContactsList from 'components/ContactsList';
import ContactFilter from 'components/ContactFilter';

import { FirstTitle, SecondTitle, WithoutContacts } from './App.styled';

export default function App() {

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  

  const contactHandler = (data) => {
  
    const findContact = contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (findContact) {
      alert(`${data.name} is already in contact`);
    } else {
      const contact = {
        id: nanoid(),
        ...data,
      };
      setContacts((prevContacts) =>
        [...prevContacts, contact]);
    }
  };

  const handleSearchChange = (e) => {
    const {value } = e.currentTarget;
    setFilter( value );
  };

  const onFilteredContacts = () => {
    const filterNormalize = filter.toLowerCase();
    return contacts.filter((contact) => 
       contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const onContactDelete = (id) => {
  
    const contactToDelete = contacts.filter((contact) =>  contact.id !== id);
  
    setContacts(
       contactToDelete,
    );
  };

  const hasContacts = contacts.length > 0;

    return (
      <Section>
        <FirstTitle>Phonebook</FirstTitle>
        <Phonebook onSubmit={contactHandler} title="Phonebook" />
        <SecondTitle>Contacts</SecondTitle>
        
        {!hasContacts && <WithoutContacts>There are no contacts in your phonebook</WithoutContacts>}

        {hasContacts && (
          <div>
            <ContactFilter
              value={filter}
              title="Find contacts by name:"
              onChange={handleSearchChange}
            />

            <ContactsList
              title="Contacts"
              filteredContacts={onFilteredContacts(filter)}
              onContactDelete={onContactDelete}
            />
          </div>
        )}
      </Section>
    );
  }

