import React, { Component } from 'react'

export default class Legend extends Component {
    render() {
        return (
            <div className='attributes-legend'>
                 <span className='attributes-height'>height</span>
                 <span className='attributes-weight'>weight</span>
                 <span className='attributes-attack'>attack</span>
                 <span className='attributes-defense'>defense</span>
                 <span className='attributes-hp'>hit points</span>
                 <span className='attributes-speed'>speed</span>
                 <span className='attributes-ability'>main ability</span>
                 <span className='attributes-egggroup'>dating group</span>
                 <span className='attributes-shape'>shape</span>
            </div>
        )
    }
}
