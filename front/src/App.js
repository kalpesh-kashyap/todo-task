import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DefaultLayout from './DefaultLayout/DefaultLayout';

// const DefaultLayout = React.lazy(() => import('./DefaultLayout'));

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
