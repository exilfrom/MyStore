import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    Hello from App!
                </div>
                {this.props.children}
            </div>
        )
    }
}
