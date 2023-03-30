import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';

import { getContacts } from '../../redux/selectors';

const ContactList = function () {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = el => {
    dispatch(deleteContact(el.target.dataset.id));
  };

  return (
    <ul className={css.listContact}>
      {contacts.map(({ id, name, phone }) => (
        <li className={css.itemContact} key={id}>
          <p className={css.contactName}>
            {name}: {phone}
          </p>
          <button
            data-id={id}
            onClick={handleDeleteContact}
            className={css.buttonDeleteContact}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
