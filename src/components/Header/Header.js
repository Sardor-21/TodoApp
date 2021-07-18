import React, { Component } from 'react'

export default class Header extends Component {
  
    render() {
        return (
            <div className="header d-flex justify-content-between align-items-center text-white">
              {this.props.children}
            </div>
        )
    }
}
