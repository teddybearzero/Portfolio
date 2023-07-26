import React, { Component } from 'react';
import SocialProfiles from '../src/components/SocialProfiles';
import Projects from '../src/components/Projects';
import {
    NavLink,
    HashRouter,
    Route,
    Routes
} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div className='sidebar'>
                    <ul>
                        <li><NavLink to="./">Home</NavLink></li>
                        <li><NavLink to="/projects">Work Portfolio</NavLink></li>
                        <li><NavLink to="/personal">Personal Portfolio</NavLink></li>
                        <li><NavLink to="/aboutme">About Me</NavLink></li>
                        <li><SocialProfiles /></li>
                    </ul>
                    <div>
                        <Routes>
                            <Route exact path="/" component={App} />
                            <Route exact path="/projects" component={Projects} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;
