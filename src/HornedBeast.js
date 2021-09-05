import React, { Component } from 'react'

export class HornedBeast extends Component {
    render() {
       
        return (
            <>
            <h4> Movie Name {this.props.movieName}</h4>
            <img alt={'movie image'} title={this.props.movieName} src={this.props.src} />
            <p>
            {this.props.disc}
            </p>
            </>

        )
    }
}

export default HornedBeast
