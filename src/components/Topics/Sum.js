import React, { Component } from 'react' 

export default class Sum extends Component {
    constructor() {
        super() 

        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    changeNumber1(val) {
        this.setState({ number1: Number(val)})
    }

    changeNumber2(val) {
        this.setState({ number2: Number(val)})
    }

    add(number1, number2) {
        this.setState({ sum: number1 + number2})
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={ (e) => this.changeNumber1(e.target.value)}></input>
                <input className="inputLine" onChange={ (e) => this.changeNumber2(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum} </span>
            </div>
        )
    }
}