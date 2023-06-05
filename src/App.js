import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: '', wordsList: []}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newItem = {
      id: uuidv4(),
      text: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newItem],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="container-1">
            <h1 className="heading">Count the characters like a Boss</h1>
            <div className="container">
              {wordsList.length > 0 ? (
                <ul className="list-container">
                  {wordsList.map(each => (
                    <li key={each.id} className="list-item">
                      <p>
                        {each.text}: {each.text.length}{' '}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  className="image"
                  alt="no user inputs"
                />
              )}
            </div>
          </div>
          <div className="container-2">
            <h1 className="header">Character Counter</h1>
            <div className="form-container">
              <form onSubmit={this.submitForm}>
                <div className="input-container">
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter the characters here"
                    onChange={this.onChangeSearchInput}
                    value={searchInput}
                  />
                  <button
                    className="add-button"
                    type="submit"
                    onClick={this.start}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
