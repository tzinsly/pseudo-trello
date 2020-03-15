import React from 'react';
import './App.css';
import Board from './components/Board'
import data from './sampleData'
import Home from './components/pages/Home'

class App extends React.Component {

    state = {
        boards: [],
        lists: []
    }

    componentDidMount() {
        this.setState({ boards: data.boards })
    }

    createNewBoard = board => {
        this.setState({ boards: [...this.state.boards, board] })
    }

    render() {
        return ( 
            <div>
                <header>
                    <h1>Pseud Trello</h1>
                    <div className="user-area">user area</div>
                </header>
                <Home boards = { this.state.boards }
                      createNewBoard = { this.createNewBoard }/> 
                <Board />
            </div>
        );
    }

}

export default App;