import React, { Component } from 'react'
import PokeList from './PokeList'

export default class SearchPage extends Component {

state = {
    sortOrder: [],
    query: []
}
    render() {
        return (
            <div>
                <form>
                <input></input>
                <select>
                    <option>asc</option>
                    <option>desc</option>
                </select>
                <button>button</button>
                </form>
                <PokeList />
            </div>
        )
    }
}
