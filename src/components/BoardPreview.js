import React from 'react'
import Board from './Board'
import Home from './pages/Home'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class BoardPreview extends React.Component {
  
  goToBoard = () => {
      const boardId = this.props.board.id;
      this.props.history.push({
        pathname: `/board/${boardId}`,
        state: {
          title: this.props.board.title,
          background: this.props.board.background
        }
      });
  }

  render() {
    return (
      <ul
        className="board-preview-item"
        onClick={this.goToBoard}
        style={{ backgroundColor: this.props.board.background }}>
        <li>
          <p>{this.props.board.title}</p>
        </li>
      </ul>

    )
  }
}

export default withRouter(BoardPreview)

BoardPreview.propTypes = {
  board: PropTypes.object.isRequired
}
