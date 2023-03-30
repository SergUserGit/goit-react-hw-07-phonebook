import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';

import { getContacts } from '../../redux/selectors';

//import { deleteContacts, resetFilterContacts } from 'redux/slice';

const ContactList = function () {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const contacts = useSelector(state => state.phonebook.contacts);
  // const dispatch = useDispatch();
  // const filterContactArray = useSelector(
  //    state => state.phonebook.contactsFilter
  //  );
  const handleDeleteContact = el => {
    //  dispatch(resetFilterContacts());
    dispatch(deleteContact(el.target.dataset.id));
  };
  //const resultArray =
  //   filterContactArray.length > 0 ? filterContactArray : contacts;
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
