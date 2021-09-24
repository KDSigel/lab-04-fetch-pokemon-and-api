import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleChange}>
                    {this.props.options.map(({value, display}) => 
                    <option value={value} >{display}
                    </option>
                    )}
                </select>
            </>
        )
    }
}
