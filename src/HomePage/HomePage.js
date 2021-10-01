import React, { Component } from 'react'
import Header from '../Header/Header';
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <Header />
                <section className='homepage'>
                    <div className='homepage-title'>All your Pokemon are belong to us.</div>
                    <img src='pika.png' alt='pikachu'/>
                </section>
            </>
        )
    }
}
