// import { Component } from "react";
import PropTypes from 'prop-types';
import { ListItem } from "components/listItem";
import { List } from './ContactList.styled';


export const ContactList = ({filteredContacts, onDeleteContact}) => {

    return <List>
            { filteredContacts.length !==0 &&
                filteredContacts.map(contact =>
                    <ListItem
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={() => onDeleteContact(contact.id)}
                    />)                
            }            
        </List>
            
}

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,        
    }).isRequired).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

// export class ContactList extends Component {
    
//     onClickHandle = (e) => {        
//         this.props.onDeleteContact(e.currentTarget.id)
//     }

//     render() {        
//         return this.props.filteredContacts.length > 0 ?
//             <ul>
//                 {
//                 this.props.filteredContacts.map(contact =>
//                 <li key={contact.id}>
//                     <p>{contact.name}: {contact.number}</p>
//                     <button type="button" id={contact.id} onClick={(this.onClickHandle)}>Delete</button>
//                 </li>)
//                 }
//             </ul>
//             : <p>Sorry, there's no contact mathing your querry</p>        
//     }
// }