import React, { Component } from 'react'
export class HornedBeast extends Component {
    constructor(props){
        super(props);
      this.state={
            Like1:0,
        }
    }

    imageClick = () => {  
        this.setState({
         
            Like1:this.state.Like1+1
        })
     }    
    render() {
       
        return (
            <>
            <h4> Movie Name {this.props.movieName}</h4>
            <img alt={'movie image'} title={this.props.movieName} src={this.props.src} onClick={this.imageClick}/>
            <p >Like={this.state.Like1} </p>
            <p>
            {this.props.disc}
            </p>
            </>

        )
    }
}

export default HornedBeast