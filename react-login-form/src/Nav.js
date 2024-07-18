import React from 'react';
import './App.css';  // Import CSS styling from the default generated CSS file.

// Creating a constant variable for the Navigation component using arrow function.
// <a href="#">...</a> provides a link that does not go anywhere.
const Nav = () => {
    return (
        <nav className="navBar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;