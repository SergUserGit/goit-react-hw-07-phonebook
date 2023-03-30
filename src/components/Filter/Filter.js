import css from './Filter.module.css';

const Filter = function () {
  const handleFilterChange = e => {};
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
