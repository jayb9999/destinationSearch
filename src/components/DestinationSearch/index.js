// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import {destinationsList} from '../../App.js'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    destinationsListX: destinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, destinationsListX} = this.state
    const searchResults = destinationsListX.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <h1>Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="inpt"
          />
          <img
            className="simg"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="items-container">
          {searchResults.map(eachItem => (
            <DestinationItem item={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
