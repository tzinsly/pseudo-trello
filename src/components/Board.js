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

    createNewList = () => {
        const list = {
            id: Math.random(),
            title: "My First List",
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
        this.setState({ currentLists: [...this.state.currentLists, list] })
    }

    render(){
        return (
            <div className="list-wrapper">
              <div className={this.props.classes.root}>
                <Button className={this.props.classes.createList} variant="contained" color="secondary" onClick={this.createNewList}>Create New List</Button>
                { Object.keys(this.state.currentLists).map( key => (
                    <List 
                        key={this.state.currentLists[key].id} 
                        list={this.state.currentLists[key]}/>
                    ))}
              </div>
            </div>            
        )
    }
}

export default withStyles(useStyles)(Board)
