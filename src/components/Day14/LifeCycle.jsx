import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 1,
            mess: '',
        }
    }

    handleChallenge = () => {
        this.setState({
            day: this.state.day + 1
        })
    }

    shouldComponentUpdate(prevProps, preState) {
        if (preState.day > 31) return false
        return true
    }

    componentDidUpdate(prevProps, preState) {
        if (preState.day === 30) {
            this.setState({
                mess: 'Congratulations '
            })
        }
    }
    render() {
        return (
            <>
                <div>React 30 Day</div>
                <button onClick={this.handleChallenge}>Do Challenge</button>
                <p>Challenge: Day {this.state.day}</p>
                {this.state.mess && <div>{this.state.mess}</div>}
            </>
        )
    }
}

