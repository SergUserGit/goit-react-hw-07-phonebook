import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';

const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '50px',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <h3>Request in progress...</h3>}
      {!isLoading && error && <h3>Error...{error}</h3>}
      <ContactList />
    </div>
  );
};

export default App;
