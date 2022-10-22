import { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',
  }

  handleChange = (e) => {
    
    this.setState({      
      name: e.currentTarget.value,
      number: e.currentTarget.value,
    })
  }

  addContact = (e) => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;

    console.log(number.value);
    
    this.setState({
      contacts: [...this.state.contacts, {id: nanoid(), name: name.value, number: number.value}],      
    })
    
    name.value = '';
    number.value = '';
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
          <input
            type="tel"
            name='number'
            pattern="[3][8][0][0-9]{9}"
            title="Phone number may contain 12 characters only numerics and start with '380'"
            required>
          </input>
        </label>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      {this.state.name &&
        <ul>
          {this.state.contacts.map(contact =>
            <li key={contact.id}>{contact.name} {contact.number}</li>)
          }
        </ul>
      }
    </>
  } 
};
