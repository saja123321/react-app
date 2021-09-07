

import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'

console.log(data);
class Main extends Component {

    render() {
        
       
        return (
            
            <div id="m">
            <p> HORROR MOVIES </p>
          {   data.map( e => {
                 return ( <HornedBeast movieName={e.title} src={e.image_url} disc={e.description}  />)
            })
            }
            </div>
            
        )
    }
}

export default Main
