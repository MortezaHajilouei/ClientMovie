import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Movie from './Movie'
import Navigation from './Navigation'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Movie/:id" component={Movie} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
