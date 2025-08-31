import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './registerPage.scss';

function RegisterPage() {
    const [visible, setVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: ""
    });

    const togglePassword = () => {
        setVisible(!visible)
    }

    const toggleConfirmPassword = () => {
        setConfirmVisible(!confirmVisible)
    }

    const validateRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let newErrors = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            agreeToTerms: ""
        };
        
        // First Name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        } else if (formData.firstName.trim().length < 2) {
            newErrors.firstName = "First name must be at least 2 characters";
        }

        // Last Name validation
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        } else if (formData.lastName.trim().length < 2) {
            newErrors.lastName = "Last name must be at least 2 characters";
        }
        
        // Email validation
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = "Password must contain at least one uppercase letter";
        } else if (!/[a-z]/.test(formData.password)) {
            newErrors.password = "Password must contain at least one lowercase letter";
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = "Password must contain at least one number";
        }

        // Confirm Password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        // Terms agreement validation
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = "You must agree to the terms and conditions";
        }
        
        setErrors(newErrors);
        
        if (Object.keys(newErrors).every(key => !newErrors[key as keyof typeof newErrors])) {
            // Handle successful registration here
            console.log("Registration Data:", formData);
            // You can add navigation logic here
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({ 
            ...formData, 
            [name]: type === 'checkbox' ? checked : value 
        });
    };

    return (
        <div className="registerPage">
            <div className="registerPageContainer">
                <div className="registerContent">
                    <div className="registerHeader">
                        <h1>Create Account</h1>
                        <p>Join us and discover amazing furniture for your home</p>
                    </div>
                    
                    <div className="registerFormContainer">
                        <h3>Register</h3>
                        <form onSubmit={validateRegister}>
                            <div className="nameRow">
                                <div className="inputContainer">
                                    <label htmlFor="firstName" className="inputTitle">First Name</label>
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        id="firstName" 
                                        className="firstName" 
                                        placeholder='John' 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                    />
                                    <span className='error'>{errors?.firstName}</span>
                                </div>
                                
                                <div className="inputContainer">
                                    <label htmlFor="lastName" className="inputTitle">Last Name</label>
                                    <input 
                                        type="text" 
                                        name="lastName" 
                                        id="lastName" 
                                        className="lastName" 
                                        placeholder='Doe' 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                    />
                                    <span className='error'>{errors?.lastName}</span>
                                </div>
                            </div>
                            
                            <div className="inputContainer">
                                <label htmlFor="email" className="inputTitle">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="email" 
                                    placeholder='john.doe@gmail.com' 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                />
                                <span className='error'>{errors?.email}</span>
                            </div>
                            
                            <div className="inputContainer">
                                <label htmlFor="password" className="inputTitle">Password</label>
                                <div className="passwordInputWrapper">
                                    <input 
                                        type={visible ? "password" : 'text'} 
                                        name="password" 
                                        id="password" 
                                        className="password" 
                                        placeholder='********' 
                                        value={formData.password} 
                                        onChange={handleChange} 
                                    />
                                    <div onClick={togglePassword} className="togglePasswordContainer">
                                        {visible ? 
                                            <FiEyeOff className="eyeIcon" /> : 
                                            <FiEye className="eyeIcon" />
                                        }
                                    </div>
                                </div>
                                <span className='error'>{errors?.password}</span>
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="confirmPassword" className="inputTitle">Confirm Password</label>
                                <div className="passwordInputWrapper">
                                    <input 
                                        type={confirmVisible ? "password" : 'text'} 
                                        name="confirmPassword" 
                                        id="confirmPassword" 
                                        className="confirmPassword" 
                                        placeholder='********' 
                                        value={formData.confirmPassword} 
                                        onChange={handleChange} 
                                    />
                                    <div onClick={toggleConfirmPassword} className="togglePasswordContainer">
                                        {confirmVisible ? 
                                            <FiEyeOff className="eyeIcon" /> : 
                                            <FiEye className="eyeIcon" />
                                        }
                                    </div>
                                </div>
                                <span className='error'>{errors?.confirmPassword}</span>
                            </div>

                            <div className="termsContainer">
                                <label className="checkboxLabel">
                                    <input 
                                        type="checkbox" 
                                        name="agreeToTerms" 
                                        checked={formData.agreeToTerms} 
                                        onChange={handleChange} 
                                    />
                                    <span className="checkmark"></span>
                                    I agree to the <Link to="/terms" className="termsLink">Terms & Conditions</Link> and <Link to="/privacy" className="termsLink">Privacy Policy</Link>
                                </label>
                                <span className='error'>{errors?.agreeToTerms}</span>
                            </div>
                            
                            <button type="submit" className='registerBtn'>Create Account</button>
                        </form>
                        
                        <div className="registerFooter">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
                
                <div className="registerImage">
                    <div className="imageOverlay">
                        <h2>Welcome to Furniture Store</h2>
                        <p>Create your account and start exploring our collection</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
