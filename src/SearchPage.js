import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'
import Dropdown from './Dropdown'

export default class SearchPage extends Component {

state = {
    sortOrder: '',
    query: '',
    pokes: [],
    isLoading: false
}

changeSortOrder = async (e) => {
    await this.setState({ sortOrder: e.target.value })
    this.fetchStuff()
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
    this.setState({isLoading: true})
    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}&perPage=400`)
    this.setState({ 
        pokes: data.body.results,
        isLoading: false})
}

    render() {
        return (
            <>
                <section className="left-search-nav">
                    <h3>Find your Pokemon</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.searchData} />
                        <button>Search by name</button>
                    </form>
                    {/* <select onChange={this.changeSortOrder}>
                        <option value='asc'>sort ascending</option>
                        <option value='desc'>sort descending</option>
                    </select> */}
                    <Dropdown 
                    handleChange={this.changeSortOrder}
                    options={[
                        {value:'asc', 
                        display:'sort ascending'},
                        {value:'desc', 
                        display:'sort descending'},
                    ]}
                    />
                </section>
                <ul>{
                this.state.isLoading
                ? <img src='3753264_170x100.gif' alt='page loading' />
                : <PokeList pokes={this.state.pokes}
                />
                }
                </ul>
            </>
        )
    }
}
