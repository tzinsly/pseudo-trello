import React from 'react'
import '../Board.css'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from './List'
import data from '../sampleData'

const useStyles = {
  root: {
    '& > *': {
      margin: 1,
    },
  },
  createList: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

class Board extends React.Component {

    state = {
        currentLists: []
    }

    componentDidMount() {
        this.setState({ currentLists : data.lists })
    }

    newInputBoard = React.createRef()
    createNewList = (e) => {
        e.preventDefault()
        //console.log(this.newInputBoard.current.value)
        const list = {
            id: Math.random(),
            title: this.newInputBoard.current.value,
            board: 300,
            cards : [
                {
                    id: 1,
                    text: 'Task 1'
                },
                {
                    id: 2,
                    text: 'Task 2'
                },
                {
                    id: 3,
                    text: 'Task 3'
                } 
            ],
            createdAt: new Date()
        }

        if (list.title) {
          this.setState({ currentLists: [...this.state.currentLists, list] })
        }
        this.newInputBoard.current.value = ''
        
    }

    render(){
        return (
          <div>
            <div className="list-wrapper">
              <div className={this.props.classes.root}>
                { Object.keys(this.state.currentLists).map( key => (
                    <List 
                        key={this.state.currentLists[key].id} 
                        list={this.state.currentLists[key]}/>
                    ))}
              </div>
            </div>
            <form onSubmit={this.createNewList}
              className="new-list-wrapper">
              <input
                type="text"
                name="name"
                ref={this.newInputBoard}
                placeholder=" + New List" />
            </form> 
            </div>           
        )
    }
}

export default withStyles(useStyles)(Board)
