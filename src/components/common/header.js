'use strict';

const React = require('react');
const { Link } = require('react-router-dom');

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="images/pluralsight-logo.png" alt="Pluralsight Logo" width="200px" />
                </a>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/authors">Authors</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

module.exports = Header;
