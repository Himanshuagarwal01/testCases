import React, { Component } from 'react'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCount: 0
        }
    }
    componentDidMount() {
        this.fun(90, 80);
    }

    fun = (a, b) => {
        return a + b;
    }

    checkBox = () => {
        return { id: 10 }
    }

    loadData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setState({
                    newCount: 50
                });
                resolve({ me: 12 })
            }, 2000)
        })
    }
    signOut = () => {
        this.fun(90, 90)
    }
    render() {
        return (
            <div>
                hello
                <button onClick={() => this.signOut()}>SignOut
                    <input type='text' id='firstName' value='CodeImprove' name='firstNamea' />
                </button>
            </div>
        )
    }
}
