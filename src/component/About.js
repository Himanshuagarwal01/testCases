import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Himanshu Agarwal',
            id: 10
        }
    }
    render() {
        return (
            <div>
                About
                <div className='h1cls'> Hello</div>
            </div>
        )
    }
}
