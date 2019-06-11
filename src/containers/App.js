import React, { Component } from 'react';
import CardList from '../components/CardList';
import { plants } from '../plants';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

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
        const filteredPlants = this.state.plants.filter(plant => {
            return plant.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if (!plants.length) {
            return <h1 className='washed-blue f1'>Loading</h1>
        } else {
            return (
                <div className='tc' >
                    <h1 className='washed-blue f1'>Plantfriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList plants={filteredPlants} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;