/* eslint-disable jsx-a11y/img-redundant-alt */
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

            <h4>{this.props.Name}</h4>
            <img alt='HornedBeast' title={this.props.Name} src={this.props.src} onClick={this.imageClick} />

            <p >Like={this.state.Like1} </p>
            <p>
            {this.props.disc}
            </p>
            </>
        )
    }
}

export default HornedBeast