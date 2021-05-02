import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-primary">
                <i className="fab fa-github"></i>
                <h1> GITHUB Search </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
