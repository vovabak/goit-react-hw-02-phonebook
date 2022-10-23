import { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  }

  handleChange = (e) => {    
    this.setState({      
      [e.currentTarget.name]: e.currentTarget.value,   
    })    
  }

  filteredContacts = () => {    

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))    
  }

  addContact = (e) => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;

    if (this.state.contacts.find(contact => contact.name.toLowerCase().trim() === name.value.toLowerCase().trim())) {
      alert(`${name.value.trim()} is allready in contacts`)
      return
    }
    
    this.setState({
      contacts: [...this.state.contacts, {id: nanoid(), name: name.value, number: number.value}],      
    })
    
    name.value = '';
    number.value = '';
  }

  deleteContact = (e) => {
    
    const updatedContacts = this.state.contacts.filter(contact => contact.id !== e.currentTarget.id)

    this.setState({
      contacts: updatedContacts,
    })
  }
  
  render() {    
    return <>
      <h1>Phonebook</h1>
      <form onSubmit={this.addContact}>
        <label>
          Name
          <input onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required>
          </input>
        </label>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input name="filter" onChange={this.handleChange} />
      </label>
      {this.state.filter &&
        (this.filteredContacts().length > 0 ?
          <ul>
          {
            this.filteredContacts().map(contact =>
              <li key={contact.id}>
                <p>{contact.name}: {contact.number}</p>
                <button type="button" id={contact.id} onClick={this.deleteContact}>Delete</button>
              </li>)
          }
        </ul>
          : <p>Sorry, there's no contact mathing your querry</p>
        )
      }
    </>
  } 
};
