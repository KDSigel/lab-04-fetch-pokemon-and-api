import React, { Component } from 'react'
import PokeList from './PokeList'
import request from 'superagent'
import Dropdown from './Dropdown'
import Legend from './Legend'
import Header from './Header'

export default class SearchPage extends Component {

state = {
    sortOrder: '',
    query: '',
    pokes: [],
    isLoading: false,
    page: 1
}

nextPage = async () => {
    await this.setState({page: this.state.page + 1})
    this.fetchStuff()
}

previousPage = async () => {
    await this.setState({page: this.state.page - 1})
    this.fetchStuff()
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
    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}&page=${this.state.page}&perPage=50`)
    this.setState({ 
        pokes: data.body.results,
        isLoading: false})
}

    render() {
        return (
            <>
                <section className="left-search-nav">
                    <Header />
                    <div>On page number {this.state.page}</div>
                    <button onClick={this.previousPage} disabled={this.state.page < 2 }>previous page</button>
                    <button onClick={this.nextPage} disabled={this.state.pokes.length < 50}>next page</button>

                    <h3>Find your Pokemon</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.searchData} />
                        <button>Search by name</button>
                    </form>
                    <Dropdown 
                    handleChange={this.changeSortOrder}
                    options={[
                        {value:'asc', 
                        display:'sort ascending'},
                        {value:'desc', 
                        display:'sort descending'},
                    ]}
                    />
                    <Legend />
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
