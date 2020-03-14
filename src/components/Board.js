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

    render(){
        return (
            <div className="list-wrapper">
                {
                    Object.keys(this.state.currentLists).map( key => (
                        <List
                            title={this.props.title}
                            key={this.state.currentLists[key].id}
                        />

                    ))

                }
            </div>
            
        )
    }
}

export default Board