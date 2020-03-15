import React from 'react'
import '../../Home.css'
import BoardPreview from '../BoardPreview'
import PropTypes from 'prop-types'
 
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
                <button id="create-board" onClick={this.newBoard}>Create New Board</button>
                {
                    //Using Object.keys because it is an Array of Boards
                    Object.keys(this.props.boards).map( key => (
                        <BoardPreview 
                            key={key}
                            board={this.props.boards[key]}/>
                ))}
            </div>
        )
    }
}

Home.propTypes = {
    boards: PropTypes.array.isRequired,
    createNewBoard: PropTypes.func.isRequired
}

export default Home