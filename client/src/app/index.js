import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'

import { BeatsList, BeatsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div style={{ background: '#FFF5EB', paddingBottom: '100%',}}>
        <Router backage>
            <NavBar />
            <Switch>
                {/* <Route path="/beats/create" exact component={BeatsInsert} /> */}
                <Route path="/beats/list" exact component={BeatsList} />
                <Route path="/beats/update/" exact component={BeatsUpdate} />
            </Switch>
        </Router>
        </div>
    )
}

export default App