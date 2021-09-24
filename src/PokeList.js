import React, { Component } from 'react'
import PokeItem from './PokeItem'

export default class PokeList extends Component {
    render() {
        return (
            <>
                {this.props.pokes.map((poke) => {
                    return (
                <PokeItem 
                key={poke.pokemon}
                url_image={poke.url_image}
                pokemon={poke.pokemon}
                height={poke.height}
                weight={poke.weight}
                attack={poke.attack}
                defense={poke.defense}
                hp={poke.hp}
                speed={poke.speed}
                ability_1={poke.ability_1}
                egg_group_1={poke.egg_group_1}
                shape={poke.shape}
                />
                    )
                }
                )}
            </>
        )
    }
}
