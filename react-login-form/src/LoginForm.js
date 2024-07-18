import React from 'react';
import './App.css';  // Import CSS styling from the default generated CSS file.

// Creating a constant variable for LoginForm using arrow function.
const LoginForm = () => {
    return (
        <div className="login-form">
            <h3>Log In</h3>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;