import React from 'react'
import Board from './Board'
import Home from './pages/Home'
import PropTypes from 'prop-types'

class BoardPreview extends React.Component {
    render(){
        return (
            <p>{this.props.board.title}</p>
        )
    }
}

export default BoardPreview

BoardPreview.propTypes = {
    board: PropTypes.object.isRequired
}
