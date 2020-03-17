import React from 'react'
import '../../Home.css'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BoardPreview from '../BoardPreview'
import PropTypes from 'prop-types'
import CreateBoardForm from '../CreateBoardForm'

const useStyles = {
  createBoard: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

class Home extends React.Component {
    newBoard = () => {
        const board = {
            title: "Summer Trips",
            background: "#FF5733",
            createdAt: new Date()
        }
        this.props.createNewBoard(board)
    }

    render(){
        return (
            <div>
              <CreateBoardForm />
              <div className="board-preview-wrapper">
                {
                    //Using Object.keys because it is an Array of Boards
                    Object.keys(this.props.boards).map( key => (
                        <BoardPreview 
                            key={key}
                            board={this.props.boards[key]}/>
                ))}
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Home)

Home.propTypes = {
    boards: PropTypes.array.isRequired,
    createNewBoard: PropTypes.func.isRequired
}
