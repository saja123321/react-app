

import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'

console.log(data);
class Main extends Component {

    render() {
        
       
        return (
            
            <div id="m">
          {   data.map( e => {
                 return ( <HornedBeast Name={e.title} src={e.image_url} disc={e.description}  />)
            })
            }
            </div>
            
        )
    }
}

export default Main
