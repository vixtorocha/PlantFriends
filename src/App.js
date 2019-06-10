import React, { Component } from 'react';
import CardList from './CardList';
import { plants } from './plants';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            plants: plants,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredPlants = this.state.plants.filter(plants => {
            return plants.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        console.log(filteredPlants);
        return (
            <div className='tc' >
                <h1>Plantfriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList plants={filteredPlants} />
            </div>
        )
    }
}

export default App;