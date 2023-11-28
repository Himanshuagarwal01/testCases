import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <table className='custom-border'>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Names</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>himanshu@gmail.com</td>
                        <td>Himanshu</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
