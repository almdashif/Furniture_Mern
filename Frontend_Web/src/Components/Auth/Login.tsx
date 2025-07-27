import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import './login.scss';

function Login({ open = false, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleProfileToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setOpen(!open)
        if (!open) {
            document.body.style.overflow = "hidden"; // Disable background scroll
        } else {
            document.body.style.overflow = "auto"; // Enable background scroll
        }
    }

    const togglePassword = () => {
        setVisible(!visible)
    }
    const vaildateLogin = (e: React.FormEvent<HTMLFormElement>) => {
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
        console.log(errors, 'first', newErrors)
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors

    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (vaildateLogin(e)) {
    //       alert("Login successful!");
    //       console.log("Login Data:", formData);
    //     }
    //   };

    return (
        <section className={`login ${!open && 'hideProfile'}`}>
            <div className="loginContainer">
                <h3>Login</h3>
                <form onSubmit={vaildateLogin}>
                    <div className="inputContainer">
                        <label htmlFor="email" className="inputTitle">Username or Email Address</label>
                        <input type="text" name="email" id="email" className="email" placeholder='abc@gmail.com' value={formData.email} onChange={handleChange} />
                        <span className='error'>{errors?.email}</span>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="password" className="inputTitle">Password</label>
                      
                        <input type={visible ? "password" : 'text'} name="password" id="password" className="password" placeholder='********' value={formData.password} onChange={handleChange} />
                     
                        <span className='error'>{errors?.password}</span>
                        <div onClick={togglePassword} className="togglePasswordContainer">
                            {visible ?
                                <FiEyeOff className={`eyeIcon ${open ? 'active' : ''}`} /> :
                                <FiEye className={`eyeIcon ${open ? '' : 'active'}`} />
                            }
                        </div>
                    </div>
                    <button type="submit" className='loginBtn'>Login</button>
                </form>
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
            <a onClick={handleProfileToggle} className="overlay"></a>
        </section>
    )
}

export default Login