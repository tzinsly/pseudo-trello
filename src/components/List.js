import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

class List extends React.Component {

  state = {
    currentCards: []
  }

  newInput = React.createRef()
  createNewCard = (e) => {
    e.preventDefault()
    const card = {
      text: this.newInput.current.value,
      listId: "123",
      labels: [],
      createdAt: new Date()
    }

    if (card.text) {
      this.setState({ currentCards: [...this.state.currentCards, card] })
    }
    
    this.newInput.current.value = ''
    console.log("Added Card successfully: " + card.text)
  } 

  render() {
    return (
      <div className="list">
        <div className="list-header">
          <h2>{this.props.list.title}</h2>
        </div>
        {Object.keys(this.props.list.cards).map(key => (
          <Card
            key={key}
            cardData={this.props.list.cards[key]} />
        ))}
        <form onSubmit={this.createNewCard} className="new-card-wrapper">
          <input
            name="name"
            type="text"
            ref={this.newInput}
            placeholder=" + New Card" />
        </form>
      </div>
    )
  }
}

export default List

List.propTypes = {
  list: PropTypes.object.isRequired
}
