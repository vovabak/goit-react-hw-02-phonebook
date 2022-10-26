import PropTypes from 'prop-types';
import { Item, Text } from '../listItem/ListItem.styled';

export const ListItem = ({ contact, onDeleteContact }) => {
    
    const handleClick = (e) => {        
        onDeleteContact(contact.id);
    }

    return <Item key={contact.id}>
                <Text>{contact.name}: {contact.number}</Text>
                <button type="button" id={contact.id} onClick={handleClick}>Delete</button>
            </Item>
}

ListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,        
    }).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}