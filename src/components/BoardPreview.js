import React from 'react'
import Board from './Board'

class BoardPreview extends React.Component {
    render(){
        return (
            <Board 
                title={this.props.board.title}
                background={this.props.board.background}/>
        )
    }
}

export default BoardPreview