import css from './ContactForm.module.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, resetFilterContacts } from 'redux/slice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);

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

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(resetFilterContacts());
    const findElem = contacts.filter(
      contact => contact.name.toUpperCase() === name.toUpperCase()
    );
    if (findElem.length > 0) {
      alert(name + ' is already in contacts.');
      return;
    }
    const newObj = { id: nanoid(), name, number };
    dispatch(addContacts(newObj));
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
