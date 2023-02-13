export const getContacts = state => state.contacts.items;
export const getError = state => state.contacts.error;
export const isLoading = state => state.contacts.isLoading;
export const getFilter = state => state.filter;

export const FilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });
};
