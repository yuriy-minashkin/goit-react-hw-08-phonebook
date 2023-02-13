import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/myContacts/selectors';

const Contacts = () => {
  const loader = useSelector(isLoading);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {loader && <p>Loading contacts...</p>}
    </>
  );
};

export default Contacts;
