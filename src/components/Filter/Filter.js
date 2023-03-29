import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, filterContacts, resetFilterContacts } from 'redux/slice';

const Filter = function () {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);

  const handleFilterChange = e => {
    dispatch(resetFilterContacts());
    const { value: filterContact } = e.target;
    dispatch(updateFilter(filterContact.toUpperCase()));
    dispatch(filterContacts(contacts));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
