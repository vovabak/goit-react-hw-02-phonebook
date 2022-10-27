// import { Component } from "react";
import PropTypes from 'prop-types';
import { Label, FilterInput as Input } from '../contactForm/ContactForm.styled';

export const Filter = ({filter, onFilterContacts}) => {
    
    return <Label>
                Find contacts by name
        <Input value={filter} name="filter" onChange={onFilterContacts} />
            </Label>;
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterContacts: PropTypes.func.isRequired,
}
// export class Filter extends Component {
    

//     render() {
//         return <label>
//                     Find contacts by name
//                     <input name="filter" onChange={this.props.onFilterContacts} />
//                 </label>;
//     }
// }