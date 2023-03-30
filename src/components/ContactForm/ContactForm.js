import css from './ContactForm.module.css';
import React, { useState } from 'react';
//import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, resetFilterContacts } from 'redux/slice';

import { addContact } from 'redux/operations';
import { getContacts } from '../../redux/selectors';

//import axios from 'axios';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(state => value);
    } else {
      setNumber(state => value);
    }
  };

  //const getData = async () => {
  //   const response = await axios.delete(
  //    'https://64243da2474017404336a1ce.mockapi.io/contacts/contacts/2'
  //  );
  //  const response = await axios.get(
  //      'https://64243da2474017404336a1ce.mockapi.io/contacts/contacts'
  //   );
  //  "createdAt": "2023-03-30T00:52:30.219Z",
  //"name": "Nicholas Harris",
  //"phone": "211-444-9371",
  // const jsonDate = new Date().toJSON();
  //  const response = await axios.post(
  //    'https://64243da2474017404336a1ce.mockapi.io/contacts/contacts',
  //    { name: 'Serhii new', phone: '75-225-489', createdAt: jsonDate }
  //  );
  //  return response.data;
  // };

  const handleSubmit = evt => {
    evt.preventDefault();

    // const jsonDate = new Date().toJSON();
    //  console.log(typeof jsonDate);

    //   const a = getData();
    //  a.then(value => {
    //     console.log(value);
    //  });

    //   dispatch(resetFilterContacts());
    const findElem = contacts.filter(
      contact => contact.name.toUpperCase() === name.toUpperCase()
    );
    if (findElem.length > 0) {
      alert(name + ' is already in contacts.');
      return;
    }
    const jsonDate = new Date().toJSON();
    const newObj = { name, phone: number, createdAt: jsonDate };
    dispatch(addContact(newObj));
    reset();
  };

  const reset = () => {
    setName(state => '');
    setNumber(state => '');
  };

  return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          className={css.formInput}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
