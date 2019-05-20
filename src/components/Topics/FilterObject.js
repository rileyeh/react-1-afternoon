import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super() 

        this.state = {
            people: [
                {name: 'Riley', city: 'Salt Lake', hairColor: 'brown'}, 
                {name: 'Emily', city: 'Provo', car: 'RAV4'}, 
                {name: 'Sydney', hairColor: 'blonde'}
            ],
            userInput: '',
            filteredPeople: [],
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterItems(prop) {
        let people = this.state.people
        let filteredPeople = []

        for (let i = 0; i < people.length; i++) 
            if(people[i].hasOwnProperty(prop)) {
                filteredPeople.push(people[i])
            }
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.people) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterItems(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPeople) } </span>
            </div>
        )
    }
}