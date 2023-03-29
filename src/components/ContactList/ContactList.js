import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { deleteContacts, resetFilterContacts } from 'redux/slice';

const ContactList = function () {
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const filterContactArray = useSelector(
    state => state.phonebook.contactsFilter
  );

  const handleDeleteContact = el => {
    dispatch(resetFilterContacts());
    dispatch(deleteContacts(el.target.dataset.id));
  };

  const resultArray =
    filterContactArray.length > 0 ? filterContactArray : contacts;

  return (
    <ul className={css.listContact}>
      {resultArray.map(({ id, name, number }) => (
        <li className={css.itemContact} key={id}>
          <p className={css.contactName}>
            {name}: {number}
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
