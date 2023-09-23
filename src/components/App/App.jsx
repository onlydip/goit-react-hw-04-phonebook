import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import ContactsList from 'components/ContactsList';
import ContactFilter from 'components/ContactFilter';

import { FirstTitle, SecondTitle, WithoutContacts } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }; 

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  contactHandler = (data) => {
    const { contacts } = this.state;
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
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handleSearchChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFilteredContacts = (value) => {
    const filterNormalize = value.toLowerCase();
    return this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterNormalize);
    });
  };

  onContactDelete = (id) => {
    const { contacts } = this.state;
    const contactToDelete = contacts.filter((contact) => {
      return contact.id !== id;
    });
    this.setState({
      contacts: contactToDelete,
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const hasContacts = contacts.length > 0;

    return (
      <Section>
        <FirstTitle>Phonebook</FirstTitle>
        <Phonebook onSubmit={this.contactHandler} title="Phonebook" />
        <SecondTitle>Contacts</SecondTitle>
        
        {!hasContacts && <WithoutContacts>There are no contacts in your phonebook</WithoutContacts>}

        {hasContacts && (
          <div>
            <ContactFilter
              value={filter}
              title="Find contacts by name:"
              onChange={this.handleSearchChange}
            />

            <ContactsList
              title="Contacts"
              filteredContacts={this.onFilteredContacts(filter)}
              onContactDelete={this.onContactDelete}
            />
          </div>
        )}
      </Section>
    );
  }
}
