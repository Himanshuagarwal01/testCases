import React, { Component } from 'react'

export default class SecondClock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            second: 0
        }
    }

    updated = () => {
        this.setState({
            second: this.state.second + 1
        })
    }

    render() {
        // console.log('componentDidUpdate', snapshot);
        // console.log('updated State', this.state.second);
        return (
            <div>
                <h1>{this.state.second}</h1>
                <button onClick={this.updated}>Login</button>
            </div>
        )
    }
}
