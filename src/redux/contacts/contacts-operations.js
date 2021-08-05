import axios from 'axios';
import {
    addContactsRequest,
    addContactsSucces,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSucces,
    deleteContactsError,
    fetchContactsRequest,
    fetchContactsSucces,
    fetchContactsError,
} from './contacts-actions';


export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSucces(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addContact = ({name, number}) => dispatch => {
  const contact = {
    name,
    number,
  };
    dispatch(addContactsRequest());

    axios.post('/contacts', contact)
        .then(({data}) => dispatch(addContactsSucces(data)))
        .catch(error => dispatch(addContactsError(error.message)));
};

export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactsRequest());

    axios.delete(`/contacts/${contactId}`)
        .then(res => dispatch(deleteContactsSucces(contactId)))
        .catch(error => dispatch(deleteContactsError(error.message)));
};