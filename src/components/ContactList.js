import { useDispatch, useSelector } from "react-redux";
import { getVisibleContacts } from '../redux/contacts/contacts-selectors';
import { deleteContact } from '../redux/contacts/contacts-operations';


function ContactList() {

    const dispatch = useDispatch()

    const contacts = useSelector(getVisibleContacts);

    const handleDelete = (id) => dispatch(deleteContact(id))


    return (
        <div className="Contact-list-wrap" >
            <ul className="Contact-container__list">
                {contacts.map(contact => (
                    <li key={contact.id} className="Contact-container__item">{contact.name}: {contact.number}
                        <button
                            onClick={() => handleDelete(contact.id)}
                            className="Contact-list__btn" >Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;