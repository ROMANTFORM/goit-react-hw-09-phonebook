import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/contacts-operations";

const initialState = {
    name: '',
    number: '',
};


function ContactForm() {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState(initialState);

    const handleChange = fieldName => evt => {
        setFormData(prev => ({ ...prev, [fieldName]: evt.target.value }))
    };


    const handleSubmit = evt => {
        evt.preventDefault();
dispatch(addContact(formData))
        reset();
    };

    const reset = () => {
        setFormData(initialState)
    };



    return (
        <div className="Contacts-wrap">
            <form className="Form" onSubmit={handleSubmit} >

                <h2 className="Form-title">Add new Contact!</h2>

		        <p className="Form-p">
                    <label htmlFor="name" className="floatLabel">
                        Name
                        <input
                            className="Form-input"
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange('name')}
                        />
                    </label>  
		        </p>
		        <p>
                    <label htmlFor="number" className="floatLabel">
                        Number
                        <input
                            className="Form-input"
                            id="number"
                            name="number"
                            type="text"
                            value={formData.number}
                            onChange={handleChange('number')}
                        />
                    </label> 
		        </p>
		        <p>
			        <button type="submit" className="Contact-form-btn">Add Contact</button>
		        </p>
	        </form>
        </div>
    );
};

export default ContactForm;