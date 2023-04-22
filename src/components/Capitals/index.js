import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {idOfCapital: countryAndCapitalsList[0].id}

  updateState = event => this.setState({idOfCapital: event.target.value})

  render() {
    const {idOfCapital} = this.state
    const capitalSelected = countryAndCapitalsList.find(
      eachRow => eachRow.id === idOfCapital,
    )

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="options-para">
            <select
              className="select-ele"
              onChange={this.updateState}
              value={capitalSelected.id}
            >
              {countryAndCapitalsList.map(capital => (
                <option key={capital.id} value={capital.id}>
                  {capital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para-ele">is capital of which country?</p>
          </div>
          <h1 className="country-name">{capitalSelected.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
