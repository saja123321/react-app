/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'

export class HornedBeast extends Component {
    render() {
       
        return (
            <>
            <h4>{this.props.Name}</h4>
            <img alt='HornedBeast' title={this.props.Name} src={this.props.src} />
            <p>
            {this.props.disc}
            </p>
            </>
        )
    }
}

export default HornedBeast
