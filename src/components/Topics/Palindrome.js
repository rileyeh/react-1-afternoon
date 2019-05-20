import React, { Component } from 'react' 

export default class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome : '',
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    pallyCheck(userInput) {
        let word = userInput
        let reversed = userInput
        reversed = reversed.split('').reverse().join('')

        if (word === reversed) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.pallyCheck(this.state.userInput) }>Check</button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome }</span>
            </div>
        )
    }
}