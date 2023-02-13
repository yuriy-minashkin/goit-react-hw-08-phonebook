import { useDispatch, useSelector } from 'react-redux';
import { filterSlice } from 'redux/myContacts/filterSlice';
import { getFilter } from 'redux/myContacts/selectors';
import { nanoid } from 'nanoid'
import css from './Filter.module.css'

const Filter = () => {
  const filterInputID = nanoid();
  const { changeFilter } = filterSlice.actions;
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterInputHandler = event => {
    const { value } = event.target;
    dispatch(changeFilter(value.toLowerCase()))
  };


  return (
  <label className={css.label} htmlFor={filterInputID}>
    Find contacts by name
    <input
      className={css.input}
      type="text"
      name="filter"
      value={filter}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      id={filterInputID}
      onChange={filterInputHandler}
    />
  </label>
);
};

export default Filter;