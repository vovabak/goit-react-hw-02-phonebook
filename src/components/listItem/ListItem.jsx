import PropTypes from 'prop-types';
import { Item, Text } from '../listItem/ListItem.styled';

export const ListItem = ({ contact, onDeleteContact }) => {
    
    const { name, number } = contact;

    return <Item>
                <Text>{name}: {number}</Text>
                <button type="button" onClick={onDeleteContact}>Delete</button>
            </Item>
}

ListItem.propTypes = {
    contact: PropTypes.shape({        
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,        
    }).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}