import React from 'react'
import "./signin.css"

const Signin = () => {
    return (
        <div className="singinpage">
            <div className="signininfo">
                <label>E-mail Adress:</label>
                <input type="email" />
                <label>Password:</label>
                <input type="password" />
                <input type="submit" className="lgnbtn" value="Login" />
            </div>
        </div>
    );
};

export default Signin