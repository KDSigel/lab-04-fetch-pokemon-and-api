import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'

export default class SearchPage extends Component {

state = {
    sortOrder: '',
    query: '',
    pokes: []
}

changeSortOrder = (e) => {
this.setState({ sortOrder: e.target.value })
}

handleSubmit = async (e) => {
    e.preventDefault()
    this.fetchStuff()
}

searchData = (e) => {
this.setState({query: e.target.value})
}

componentDidMount = async () => {
    this.fetchStuff()
}

fetchStuff = async () => {
    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}`)
    this.setState({ pokes: data.body.results })
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.searchData} />
                <button>search</button>
                <select onChange={this.changeSortOrder}>
                    <option value='asc'>sort ascending</option>
                    <option value='desc'>sort descending</option>
                </select>
                </form>
                <PokeList pokes={this.state.pokes}
                />
            </div>
        )
    }
}
