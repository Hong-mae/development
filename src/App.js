import React, { Component } from 'react';

// Component
import Routers from './Components/public/Routers'

console.log(process.env);

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Routers/>
            </div>
        );
    }
}

export default App;
