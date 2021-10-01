import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <span className='navigation-links'>
                <NavLink exact to='/' activeClassName='activelink'>home page</NavLink>
                <NavLink exact to='/Pokemon' activeClassName='activelink'>search page</NavLink>
            </span>
        )
    }
}
