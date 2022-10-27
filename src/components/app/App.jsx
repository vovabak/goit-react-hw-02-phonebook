import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from '../contactList';
import { Filter } from '../filter';
import { ContactForm } from '../contactForm';
import { Container } from "./App.styled";

const prevContacts = [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
    
export class App extends Component {

  state = {
    contacts: prevContacts,
    filter: '',
  }

  filterContacts = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    })
  }
  
  addContact = (name, number) => {
    
    const normalizedName = name.toLowerCase().trim();

    if (this.state.contacts.find(contact => contact.name.toLowerCase().trim() === normalizedName)) {
      alert(`${name.trim()} is allready in contacts`)
      return
    }

    const contactToAdd = {
      id: nanoid(),
      name,
      number,
    }
    
    this.setState(prevState => {
      return { contacts: [contactToAdd, ...prevState.contacts] }
    })
  }

  deleteContact = (contactToDeleteId) => {
    const updatedContacts = this.state.contacts.filter(contact => contact.id !== contactToDeleteId)

    this.setState({
      contacts: updatedContacts,      
    })
  }
  
  render() {
    const normalizedFilter = this.state.filter.toLowerCase().trim();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
    
    
    return <Container >
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={this.addContact}
      />
      <h2>Contacts</h2>
      <Filter
        filter={this.state.filter}
        onFilterContacts={this.filterContacts} />
      {normalizedFilter &&
        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      }
    </Container>
  };
}
