import {  useState } from "react";
import { useDispatch } from "react-redux";
import * as authOperations  from '../redux/auth/auth-operations';

const initialState = {
    email: '',
    password: '',
}

function LogIn() {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState);

    const handleChange = (fieldName) => (evt) => {
        setFormData(prev => ({...prev, [fieldName]: evt.target.value}))
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(authOperations.logIn(formData));
        reset();
    };

    const reset = () => {
        setFormData(initialState)
    };

    return (
        <div className="Form-wrap">
            <form className="Form" onSubmit={handleSubmit} >

                <h2 className="Form-title">Log In!</h2>

		        <p className="Form-p">
                    <label htmlFor="Email" className="floatLabel">
                        Email
                        <input
                            className="Form-input"
                            id="Email"
                            name="Email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange('email')}
                        />
                    </label>  
		        </p>
		        <p>
                    <label htmlFor="password" className="floatLabel">
                        Password
                        <input
                            className="Form-input"
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange('password')}
                        />
                    </label> 
		        </p>
		        
		        <p>
			        <button type="submit" className="Form-btn">Log In!</button>
		        </p>
	        </form>
        </div>
    )
};

export default LogIn;