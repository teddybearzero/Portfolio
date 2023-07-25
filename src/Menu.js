import React, {Component} from 'react';
import profile from './assets/profile.png'
import SocialProfiles from './SocialProfiles';

class Menu extends Component {
    render() {
        return (
            <div>
                <ul className='sidebar'>
                <li><img src={profile} alt='profile' className='profile'/></li>
                <li><text>Home</text></li>
                <li><text>Work Portfolio</text></li>
                <li><text>Personal Portfolio</text></li>
                <li><text>About Me</text></li>
                <li><SocialProfiles/></li>
                </ul>


                
            </div>
        )
    }
}
export default Menu;