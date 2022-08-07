// import React, { Component } from 'react'

// import { tenHighestPopulation } from '../../constances/data'


// export default class ClassComponent extends Component {
//     constructor(props) {
//         super(props)

//     }

//     render() {
//         const techsFormatted = tenHighestPopulation.map((tech) =>
//             <li key={tech.country}>{tech.country}</li>)
//         return (
//             <div>
//                 {techsFormatted}
//             </div>

//         )
//     }
// }
//index.js

import React from 'react'
import ReactDOM from 'react-dom'

// class based component
export default class ClassComponent extends React.Component {
    //    constructor (props) {

    //    }
    state = {
        count: 0,
    }
    render() {
        const count = this.state.count;

        return (
            <div>
                <h3>App</h3>
                <div>{count}</div>
                <button
                    onClick={() => this.setState({ count: this.state.count + 1 })}
                >Increase +</button>
                <button
                    onClick={() => this.setState({ count: this.state.count - 1 })}
                >Decrease -</button>
            </div>
        )
    }
}
