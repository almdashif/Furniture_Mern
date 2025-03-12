import React from 'react';
import './login.scss';

function Login({ open = false, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const handleProfileToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setOpen(!open)
        if (!open) {
            document.body.style.overflow = "hidden"; // Disable background scroll
        } else {
            document.body.style.overflow = "auto"; // Enable background scroll
        }
    }


    return (
        <section onClick={handleProfileToggle} className={`login ${!open && 'hideProfile'}`}>
            <div className="loginContainer">
                <h3>Login</h3>
                <form>
                    <div className="inputContainer">
                        <input type="text" name="email" id="email" className="email" placeholder='abc@gmail.com' />
                        {/* <label htmlFor="email" className="email">Enter your email</label> */}
                    </div>
                    <div className="inputContainer">
                        <input type="password" name="password" id="password" className="password" placeholder='********' />
                        {/* <label htmlFor="password" className="password">Enter your password</label> */}
                    </div>
                    <input type="button" value='Login' className='loginBtn' />
                </form>
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </section>
    )
}

export default Login