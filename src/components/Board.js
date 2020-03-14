import React from 'react'
import List from './List'
import data from '../sampleData'

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
            createdAt: new Date()
        }
        this.setState({ currentLists: [...this.state.currentLists, list] })
    }

    render(){
        return (
            <div className="list-wrapper">
                <button onClick={this.createNewList}>Create New List</button>
                { Object.keys(this.state.currentLists).map( key => (
                    <List key={this.state.currentLists[key].id} />
                    ))}
            </div>            
        )
    }
}

export default Board