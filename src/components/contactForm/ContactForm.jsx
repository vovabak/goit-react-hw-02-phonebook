// import { Component } from "react";
import { Formik } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { Label, Button, FormStyled as Form, Input } from './ContactForm.styled';


const initialValues = {
        name: '',
        number: '',
}

let signupSchema = object({
  name: string().required(),
  number: string().required(), 
});

export const ContactForm = ({ onSubmit }) => {    
   
    const handleSubmit = (values, { resetForm }) => {           

        const { name, number } = values;        
   
        onSubmit(name, number);
        
        resetForm();
    }

    return <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}>
        <Form>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я ]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
            <Label>
                Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />                
            </Label>
            <Button type="submit">Add contact</Button>
        </Form>
    </Formik>
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

// export const ContactForm = ({ onSubmit }) => {
    
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const { name, number } = e.currentTarget;        
   
//         onSubmit(name.value, number.value);
        
//         name.value = '';
//         number.value = '';
//     }

//     return <Form onSubmit={handleSubmit}>
//                     <Label>
//                     Name
//                     <Input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     />
//                     </Label>
//                     <Label>
//                     Number
//                     <Input
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                     />
//                     </Label>
//                     <Button type="submit">Add contact</Button>
//             </Form>
// }

// export class ContactForm extends Component {

//     state = {        
//         name: '',
//         number: '',
//     }

//     handleChange = (e) => {    
//         this.setState({      
//         [e.currentTarget.name]: e.currentTarget.value,   
//         })    
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();        

//         const { name, number } = this.state;        
   
//         this.props.onSubmit(name, number)
        
//         this.setState({
//             name: '',
//             number: '',
//         })
//     }

//     render() {
//         return <form onSubmit={this.handleSubmit}>
//                     <label>
//                     Name
//                     <input
//                         onChange={this.handleChange}
//                         value={this.state.name}
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     />
//                     </label>
//                     <label>
//                     Number
//                     <input
//                         onChange={this.handleChange}
//                         value={this.state.number}
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required>
//                     </input>
//                     </label>
//                     <button type="submit">Add contact</button>
//             </form>
//     }
// }