import React, { Component } from 'react'
import Table from './Table'

export default class Click extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <div>
                    Count
                </div>
                <div className={`clicks-${this.state.count}`}>
                    {this.state.count} click's
                </div>
                <div>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                </div>
                <Table />
            </div>
        )
    }
}
