import React, {Component} from 'react';
import Projects from './Projects';
import Menu from './Menu';
import SocialProfiles from './SocialProfiles';
import AboutMe from './AboutMe';

class App extends Component {

    render() {
        return (
            <div className='container'>
                <div><Menu/></div>
                <div><AboutMe/></div>
            </div>
        )
    }
}

export default App;
