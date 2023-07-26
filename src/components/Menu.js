import React, {Component} from 'react';
import profile from '../assets/profile.png'
import SocialProfiles from './SocialProfiles';

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Projects from './Projects';

class Menu extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <ul className='sidebar'>
                <img src={profile} alt='profile' className='profile'/>
                <li><text>Home</text></li>
                <li><text>Work Portfolio</text></li>
                <li><text>Personal Portfolio</text></li>
                <li><text>About Me</text></li>
                <li><SocialProfiles/></li>
                </ul>
            </div>
            </HashRouter>

        )
    }
}
export default Menu;