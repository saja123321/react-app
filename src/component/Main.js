import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
class Main extends Component {
    render() {
        let  movies = [
            {    movieName:'Knives Out',
                src : 'https://images-na.ssl-images-amazon.com/images/I/81bCcdEhfCL._AC_SY741_.jpg' ,
                disc : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam voluptatum voluptate quibusdam quidem fuga accusantium alias eum praesentium placeat sed omnis, a modi rem quisquamex minus nostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum consequunturdebitis repellendus ostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum nisi'

            },
              {
                movieName : 'Don\'t Breathe 2',
                src : 'https://media2.fdncms.com/tucsonweekly/imager/u/zoom/31108568/dont-breathe-2.jpg?cb=1628151327' ,
                disc : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam voluptatum voluptate quibusdam quidem fuga accusantium alias eum praesentium placeat sed omnis, a modi rem quisquamex minus nostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum consequunturdebitis repellendus ostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum nisi'

            },
            {
                movieName : ' Hell Fest',
                src : 'https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZSUSK8j5ZBC4vnAX-1qUiuagElnH76v568oGb4PKXQuQVbMtnLFkzFnuC_0-_ODm5UhvXPIy-_Q8_GKpF4BdnazOX8.jpg?r=848',
                disc : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quam voluptatum voluptate quibusdam quidem fuga accusantium alias eum praesentium placeat sed omnis, a modi rem quisquamex minus nostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum consequunturdebitis repellendus ostrum obcaecati! Iure aut quas adipisci non, minima, qui excepturi rerum nisi'

            }
        ];
        return (
            
            <div id="m">
            <p> HORROR MOVIES </p>
          {  movies.map(e => {
                 return  <HornedBeast movieName={e.movieName} src={e.src} disc={e.disc}/>
            })
            }
            </div>
            
        )
    }
}

export default Main
