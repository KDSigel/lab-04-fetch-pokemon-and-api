import React, { Component } from 'react'

export default class DetailPagePoke extends Component {
    render() {
        return (
            <>
                 <img src={this.props.url_image} alt={this.props.pokemon} className='big-poke' />
                 <div>{this.props.pokemon}</div>
                 <div className='attributes'>
                 <span className='attributes-height'>{this.props.height}</span>
                 <span className='attributes-weight'>{this.props.weight}</span>
                 <span className='attributes-attack'>{this.props.attack}</span>
                 <span className='attributes-defense'>{this.props.defense}</span>
                 <span className='attributes-hp'>{this.props.hp}</span>
                 <span className='attributes-speed'>{this.props.speed}</span>
                 <span className='attributes-ability'>{this.props.ability_1}</span>
                 <span className='attributes-egggroup'>{this.props.egg_group_1}</span>
                 <span className='attributes-shape'>{this.props.shape}</span>
                 </div>
            </>
        )
    }
}
