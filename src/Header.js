import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <div><Link to='../'>home page</Link></div>
                <div><Link to='../pokemon'>search page</Link></div>
                <div><Link to=''>detail page</Link></div>
            </>
        )
    }
}
