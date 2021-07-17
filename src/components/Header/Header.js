import React, { Component } from 'react'
import { FaSun } from 'react-icons/fa'

export default class Header extends Component {
    render() {
        return (
            <div className="header d-flex justify-content-between align-items-center text-white">
                <h1 className="mb-0 fw-bold">T O D O</h1>
                <button className="btn text-white"><FaSun /></button>
            </div>
        )
    }
}
