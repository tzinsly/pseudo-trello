import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

class List extends React.Component {
    render () {
        return (
            <div className="list">
                <div className="list-header">
                    <h2>{this.props.list.title}</h2>
                </div>
                {Object.keys(this.props.list.cards).map( key => (
                    <Card
                        key={key}
                        cardData={this.props.list.cards[key]}/>
                ))}
            </div>
        )
    }
}

export default List

List.propTypes = {
  list: PropTypes.object.isRequired
}
