import React, { Component } from 'react'

export default class Axios extends Component {
    state = {
        name: 'Himanshu'
    }

    findname = async () => {
        return new Promise((resolve, reject) => {
            this.setState({
                name: 'Himanshu Agarwal'
            })
            resolve({ status: 200 })
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
