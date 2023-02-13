import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilteredContacts } from 'redux/myContacts/selectors';
import { deleteContact, fetchContacts  } from 'redux/myContacts/operations';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts ());
  }, [dispatch]);

  const contactDelHandler = id => {
    dispatch(deleteContact(id));
  };

  const renderContacts = useSelector(FilteredContacts);

  return (
    <ul className={css.list}>
      {renderContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>
            <span>{name}:</span> {number}
          </p>
          <button className={css.button} onClick={() => contactDelHandler(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;