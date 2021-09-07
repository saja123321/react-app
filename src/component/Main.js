import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
class Main extends Component {
    render() {
        let  movies = [
            {    Name:'UniWhal',
                src : 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' ,
                disc : 'A unicorn and a narwhal nuzzling their horns'

            },
              {
                Name : 'Rhino Family',
                src : 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' ,
                disc : 'Mother (or father) rhino with two babies'

            },
            {
                Name : ' Unicorn Head',
                src : 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"',
                disc : ' Someone wearing a creepy unicorn head mask'

            }
        ];
        return (
            
            <div id="m">
          {  movies.map(e => {
                 return  <HornedBeast Name={e.Name} src={e.src} disc={e.disc}/>
            })
            }
            </div>
            
        )
    }
}

export default Main
