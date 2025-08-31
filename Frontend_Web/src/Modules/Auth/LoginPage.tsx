import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './loginPage.scss';

function LoginPage() {
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const togglePassword = () => {
        setVisible(!visible)
    }

    const validateLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let newErrors = {
            email: "",
            password: "",
        };
        
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
        
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            // Handle successful login here
            console.log("Login Data:", formData);
            // You can add navigation logic here
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="loginPage">
            <div className="loginPageContainer">
                <div className="loginContent">
                    <div className="loginHeader">
                        <h1>Welcome Back</h1>
                        <p>Sign in to your account to continue</p>
                    </div>
                    
                    <div className="loginFormContainer">
                        <h3>Login</h3>
                        <form onSubmit={validateLogin}>
                            <div className="inputContainer">
                                <label htmlFor="email" className="inputTitle">Username or Email Address</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    className="email" 
                                    placeholder='abc@gmail.com' 
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
                            
                            <button type="submit" className='loginBtn'>Login</button>
                        </form>
                        
                        <div className="loginFooter">
                            <p>Don't have an account? <Link to="/register">Register</Link></p>
                            <Link to="/forgot-password" className="forgotPassword">Forgot Password?</Link>
                        </div>
                    </div>
                </div>
                
                <div className="loginImage">
                    <div className="imageOverlay">
                        <h2>Furniture Store</h2>
                        <p>Discover amazing furniture for your home</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
