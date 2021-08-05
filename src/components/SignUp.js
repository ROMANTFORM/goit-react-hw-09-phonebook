import React, { Component } from 'react';
import * as authOperations  from '../redux/auth/auth-operations';
import {  useState } from "react";
import { useDispatch } from 'react-redux';


const initialState = {
    name: '',
    email: '',
    password: '',
};

function SignUp() {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState(initialState)

    const handleChange = (fieldName) => (evt) => {
        setFormData(prev => ({ ...prev, [fieldName]: evt.target.value }));
    };
   
    const reset = () => { setFormData(initialState) };
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(authOperations.register(formData))
        reset();
    };
    
    return (
        <div className="Form-wrap">
            <form className="Form" autoComplete="off" onSubmit={handleSubmit}>

                <h2 className="Form-title">Sign Up</h2>

                <p>
                    <label htmlFor="name" className="floatLabel">
                       Name
                        <input
                            className="Form-input"
                            id="name"
                            name="name"
                            value={formData.name}
                            type="text"
                            onChange={handleChange('name')}
                        />
                    </label>  
		        </p>
		        <p className="Form-p">
                    <label htmlFor="Email" className="floatLabel">
                        Email
                        <input
                            className="Form-input"
                            id="Email"
                            name="Email"
                            value={formData.email}
                            type="text"
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
                            value={formData.password}
                            type="password"
                            onChange={handleChange('password')}
                        />
                    </label> 
		        </p>
		        
		        <p>
			        <button type="submit" className="Form-btn">Sign Up!</button>
		        </p>
	        </form>
        </div>
    )
};

export default SignUp;