import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <li>
                 <img src={this.props.url_image} alt={this.props.pokemon}/>
                 <div>{this.props.pokemon}</div>
                 <div>{this.props.egg_group_1}</div>
            </li>
        )
    }
}
