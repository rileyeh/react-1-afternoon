import React, { Component } from 'react' 

export default class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            names: [
                "Brian", "Charlie", "Ryan", "Alex", "Owen", "Milo", "Ezra", "TJ", "Jordan", "Wyatt", "Leo", "Cole", "Zeke", "McKay", "Blake", "Henry", "Grey", "June", "Riley", "Porter"
            ],
            userInput: '',
            filteredNames: [],
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterArray(userInput) {
        let names = this.state.names
        let filteredNames = []

        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput)) {
                filteredNames.push(names[i])
            }
        }
        this.setState({ filteredNames: filteredNames })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered: { JSON.stringify(this.state.filteredNames, null, 10) }</span>
            </div>
        )
    }
}