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
    this.setState(
      { boards: data.boards }
    )
  }

  createNewBoard = board => {
    this.setState({ boards: [...this.state.boards, board] })
  }

  render() {
    return (
      <div>
        <div id="header"> Pseud Trello </div>  
        <Home boards={this.state.boards}
          createNewBoard={this.createNewBoard} />

          
      </div>

    );
  }

}

export default App;
