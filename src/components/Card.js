import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
    render () {
        return (
            <div className="card">
                <div className="card-body">
                    <p>{this.props.cardData.text}</p>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    cardData: PropTypes.object.isRequired
}

export default Card