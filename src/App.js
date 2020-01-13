import React, { Component } from 'react';

// Component
import Routers from './Components/public/Routers'


class App extends Component {
    render() {
        const App_Style = {
            width: '100%',
            height: '100%'
        }
        return (
            <div className='App' style={App_Style}>
                <Routers />
            </div>
        );
    }
}

export default App;
