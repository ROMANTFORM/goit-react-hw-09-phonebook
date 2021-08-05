import { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import * as contactOperations from "../redux/contacts/contacts-operations";

class Contacts extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    };

    render() {
        return (
        <div className="Contact-container">
      
            <div className="Contact-form__wrapper">
                <ContactForm />
            </div>
            
            <div className="Contact-list__wrapper">
                <h2>Contacts</h2>
        
                <Filter />
        
                <ContactList />
            </div>
          
        </div>
    )
    };
};

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactOperations.fetchContacts())
});

export default connect(null, mapDispatchToProps)(Contacts);

// function Contacts() {

//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');

//     const handleNameChange = evt => setName(evt.target.value);

//     const handleNumChange = evt => setNumber(evt.target.value);

//     const handleSubmit = evt => {
//         evt.preventDefault();
//         reset();
//     };

//     const reset = () => {
//         setName('');
//         setNumber('');
//     };

//     return (
//         <div className="Contact-container">
      
//             <div className="Contact-form__wrapper">
//                 <ContactForm />
//             </div>
            
//             <div className="Contact-list__wrapper">
//                 <h2>Contacts</h2>
        
//                 <Filter />
        
//                 <ContactList />
//             </div>
          
//         </div>
//     );
// };

// export default Contacts;
