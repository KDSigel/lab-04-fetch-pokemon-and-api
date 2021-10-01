import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <>
                <select className='dropdown' onChange={this.props.handleChange}>
                    {this.props.options.map(({value, display}) => 
                    <option key={value} value={value} >{display}
                    </option>
                    )}
                </select>
            </>
        )
    }
}
