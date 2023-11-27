import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div className='hhhh'>
      {/* <div >  false */}
        <ul>
            <li key='angular' className='licls'>Angular</li>
            <li key='node' className='licls'>Node</li>
            <li key='react' className='licls'>React</li>
        </ul>
        <div className='Numbers'>
            <span>One</span>
            <span>Two</span>
        </div>
        <div>
            <button className='my-button disabled btn-primary'>Submit</button>
        </div>
        <div className='some-class'/> 
      </div>
    )
  }
}
