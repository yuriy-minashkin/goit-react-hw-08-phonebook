import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/myContacts/selectors';
import { addContact } from 'redux/myContacts/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const phoneNumberInputID = nanoid();

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
   
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };
 
  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
      ? alert(`${newContact.name} is already in contacts.`)
      : dispatch(addContact(newContact));
    
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor={nameInputId}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameInputId}
            onChange={handleChange}
          />
        </label>

        <label className={css.label} htmlFor={phoneNumberInputID}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={phoneNumberInputID}
            onChange={handleChange}
          />
        </label>

        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
};

export default ContactForm;