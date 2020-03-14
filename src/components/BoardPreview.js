import React from 'react'
import Board from './Board'

class BoardPreview extends React.Component {
    render(){
        return (
            <p>{this.props.board.title}</p>
        )
    }
}

export default BoardPreview